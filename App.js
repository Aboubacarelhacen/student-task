import React, { useState } from 'react';
import {
  Alert,
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './styles';

const categories = ['Yazılım', 'Matematik', 'Veritabanı', 'Algoritma', 'Genel'];
const priorities = ['Düşük', 'Orta', 'Yüksek'];
const filters = ['Tümü', 'Aktif', 'Tamamlanan'];
const gridLines = Array.from({ length: 36 }, (_, index) => index * 44);

const categoryColors = {
  Yazılım: '#6aa4f8',
  Matematik: '#c0a0e8',
  Veritabanı: '#f5933c',
  Algoritma: '#e8766a',
  Genel: '#aab1bc',
};

export default function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Yazılım');
  const [selectedPriority, setSelectedPriority] = useState('Orta');
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('Tümü');

  const totalTasks = tasks.length;
  const activeTasks = tasks.filter((task) => !task.completed).length;
  const completedTasks = totalTasks - activeTasks;
  const filteredTasks = getFilteredTasks();

  // Yeni görev ekler. Başlık boşsa uyarı verir.
  function addTask() {
    if (title.trim() === '') {
      Alert.alert('Uyarı', 'Görev başlığı boş olamaz.');
      return;
    }

    const newTask = {
      id: Date.now().toString(),
      title: title.trim(),
      description: description.trim(),
      category: selectedCategory,
      priority: selectedPriority,
      completed: false,
    };

    setTasks([newTask, ...tasks]);
    setTitle('');
    setDescription('');
  }

  // Görevi tamamlandı veya aktif durumuna çevirir.
  function toggleTaskStatus(id) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function getFilteredTasks() {
    if (filter === 'Aktif') {
      return tasks.filter((task) => !task.completed);
    }

    if (filter === 'Tamamlanan') {
      return tasks.filter((task) => task.completed);
    }

    return tasks;
  }

  function getPriorityStyle(priority) {
    if (priority === 'Yüksek') {
      return styles.priorityHigh;
    }

    if (priority === 'Düşük') {
      return styles.priorityLow;
    }

    return styles.priorityMedium;
  }

  const FolderCard = ({ color, children, small }) => (
    <View style={small ? styles.folderSmallWrapper : styles.folderWrapper}>
      <View
        style={[
          styles.folderTab,
          small && styles.folderTabSmall,
          { backgroundColor: color },
        ]}
      />
      <View
        style={[
          styles.folderBody,
          small && styles.folderBodySmall,
          { backgroundColor: color },
        ]}
      >
        {children}
      </View>
    </View>
  );

  const renderCategoryButton = (category) => {
    const active = selectedCategory === category;

    return (
      <TouchableOpacity
        key={category}
        style={[
          styles.categoryButton,
          active && { backgroundColor: categoryColors[category] + '55' },
        ]}
        onPress={() => setSelectedCategory(category)}
        activeOpacity={0.8}
      >
        <Text style={[styles.categoryButtonText, active && styles.selectedText]}>
          {category}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderPriorityButton = (priority) => {
    const active = selectedPriority === priority;

    return (
      <TouchableOpacity
        key={priority}
        style={[
          styles.priorityButton,
          active && getPriorityStyle(priority),
        ]}
        onPress={() => setSelectedPriority(priority)}
        activeOpacity={0.8}
      >
        <Text style={[styles.priorityButtonText, active && styles.selectedText]}>
          {priority}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderFilterButton = (filterName) => (
    <TouchableOpacity
      key={filterName}
      style={[
        styles.filterButton,
        filter === filterName && styles.filterButtonActive,
      ]}
      onPress={() => setFilter(filterName)}
      activeOpacity={0.8}
    >
      <Text
        style={[
          styles.filterButtonText,
          filter === filterName && styles.filterButtonTextActive,
        ]}
      >
        {filterName}
      </Text>
    </TouchableOpacity>
  );

  const renderTask = ({ item }) => (
    <FolderCard color={categoryColors[item.category]}>
      <View style={styles.taskMetaRow}>
        <Text style={styles.taskCategory}>{item.category}</Text>
        <Text style={item.completed ? styles.doneBadge : styles.activeBadge}>
          {item.completed ? 'Tamamlandı' : 'Aktif'}
        </Text>
      </View>

      <Text style={[styles.taskTitle, item.completed && styles.completedTitle]}>
        {item.title}
      </Text>

      {item.description ? (
        <Text style={styles.taskDescription}>{item.description}</Text>
      ) : null}

      <Text style={[styles.priorityBadge, getPriorityStyle(item.priority)]}>
        {item.priority}
      </Text>

      <View style={styles.taskActions}>
        <TouchableOpacity
          style={styles.taskMainButton}
          onPress={() => toggleTaskStatus(item.id)}
          activeOpacity={0.8}
        >
          <Text style={styles.taskMainButtonText}>
            {item.completed ? 'Aktif Yap' : 'Tamamla'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.taskDeleteButton}
          onPress={() => deleteTask(item.id)}
          activeOpacity={0.8}
        >
          <Text style={styles.taskDeleteButtonText}>Sil</Text>
        </TouchableOpacity>
      </View>
    </FolderCard>
  );

  const renderListHeader = () => (
    <View>
      <View style={styles.header}>
        <View style={styles.headerTextBox}>
          <Text style={styles.eyebrow}>Öğrenci Paneli</Text>
          <Text style={styles.bigTitle}>Görevler</Text>
          <Text style={styles.subtitle}>
            Ödevlerini, projelerini ve çalışma görevlerini düzenli takip et.
          </Text>
        </View>

        <View style={styles.headerActionBox}>
          <Text style={styles.headerCount}>{totalTasks} görev</Text>
          <TouchableOpacity style={styles.plusButton} onPress={addTask}>
            <Text style={styles.plusText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.statsGrid}>
        <FolderCard color="#f7c948" small>
          <Text style={styles.statNumber}>{totalTasks}</Text>
          <Text style={styles.statLabel}>Toplam</Text>
        </FolderCard>

        <FolderCard color="#f5933c" small>
          <Text style={styles.statNumber}>{activeTasks}</Text>
          <Text style={styles.statLabel}>Aktif</Text>
        </FolderCard>

        <FolderCard color="#65c99a" small>
          <Text style={styles.statNumber}>{completedTasks}</Text>
          <Text style={styles.statLabel}>Biten</Text>
        </FolderCard>
      </View>

      <View style={styles.formTitleRow}>
        <Text style={styles.sectionTitle}>Yeni Görev</Text>
        <Text style={[styles.selectedPriorityBadge, getPriorityStyle(selectedPriority)]}>
          {selectedPriority} öncelik
        </Text>
      </View>

      <View style={styles.formCard}>
        <TextInput
          style={styles.input}
          placeholder="Görev başlığı"
          placeholderTextColor="#8b8176"
          value={title}
          onChangeText={setTitle}
        />

        <TextInput
          style={[styles.input, styles.descriptionInput]}
          placeholder="Görev açıklaması"
          placeholderTextColor="#8b8176"
          value={description}
          onChangeText={setDescription}
          multiline
        />

        <Text style={styles.inputLabel}>Kategori</Text>
        <View style={styles.categoryRow}>
          {categories.map(renderCategoryButton)}
        </View>

        <Text style={styles.inputLabel}>Öncelik</Text>
        <View style={styles.priorityRow}>
          {priorities.map(renderPriorityButton)}
        </View>

        <TouchableOpacity style={styles.addButton} onPress={addTask} activeOpacity={0.85}>
          <Text style={styles.addButtonText}>+ Görev Ekle</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.taskListTitleRow}>
        <Text style={styles.taskListTitle}>Görevler</Text>
        <Text style={styles.recordCount}>{filteredTasks.length} kayıt</Text>
      </View>

      <View style={styles.filterContainer}>
        {filters.map(renderFilterButton)}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View pointerEvents="none" style={styles.gridBackground}>
        {gridLines.map((position) => (
          <View
            key={`vertical-${position}`}
            style={[styles.gridLineVertical, { left: position }]}
          />
        ))}
        {gridLines.map((position) => (
          <View
            key={`horizontal-${position}`}
            style={[styles.gridLineHorizontal, { top: position }]}
          />
        ))}
      </View>
      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={renderTask}
        ListHeaderComponent={renderListHeader()}
        ListEmptyComponent={
          <View style={styles.emptyCard}>
            <View style={styles.emptyIcon}>
              <Text style={styles.emptyIconText}>□</Text>
            </View>
            <Text style={styles.emptyTitle}>Görev yok</Text>
            <Text style={styles.emptyText}>Yeni bir görev ekleyerek başlayabilirsin.</Text>
          </View>
        }
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
