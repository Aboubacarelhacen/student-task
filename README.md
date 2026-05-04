# Ders Görev Takip Uygulaması

## App.js Kodu

Uygulamanın ana kodu `App.js` dosyasındadır. Proje React Native ve Expo ile hazırlanmıştır.

Kullanılan temel yapılar:

- React functional component
- `useState`
- `FlatList`
- `Alert`
- `TextInput`
- `TouchableOpacity`
- `StyleSheet`

Stiller daha düzenli olması için `styles.js` dosyasında tutulmuştur.

## Ekran Görüntüsü

Uygulamadan alınan ekran görüntüleri:

<p align="center">
  <img src="./Screenshot%202026-05-04%20at%2020.38.37.png" alt="Ekran görüntüsü 1" width="220" />
  <img src="./Screenshot%202026-05-04%20at%2020.38.52.png" alt="Ekran görüntüsü 2" width="220" />
  <img src="./Screenshot%202026-05-04%20at%2020.39.09.png" alt="Ekran görüntüsü 3" width="220" />
</p>

## Kısa Açıklama: Hangi Özellikler Var?

Bu uygulama öğrencilerin ders görevlerini takip etmesi için hazırlanmış basit bir mobil uygulamadır.

Uygulamada kullanıcı:

- Görev başlığı girebilir.
- Görev açıklaması girebilir.
- Kategori seçebilir.
- Öncelik seçebilir.
- Yeni görev ekleyebilir.
- Görevi tamamlandı veya aktif olarak işaretleyebilir.
- Görev silebilir.
- Görevleri `Tümü`, `Aktif` ve `Tamamlanan` olarak filtreleyebilir.
- Toplam, aktif ve tamamlanan görev sayılarını görebilir.

Kategoriler:

- Yazılım
- Matematik
- Veritabanı
- Algoritma
- Genel

Öncelikler:

- Düşük
- Orta
- Yüksek

Görev başlığı boş bırakılırsa uygulama kullanıcıya şu uyarıyı gösterir:

```text
Görev başlığı boş olamaz.
```

Uygulama Expo Go ile çalıştırılabilir.
