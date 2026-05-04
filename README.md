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

![Ders Görev Takip Uygulaması ekran görüntüsü 1](<./Screenshot 2026-05-04 at 20.38.37.png>)

![Ders Görev Takip Uygulaması ekran görüntüsü 2](<./Screenshot 2026-05-04 at 20.38.52.png>)

![Ders Görev Takip Uygulaması ekran görüntüsü 3](<./Screenshot 2026-05-04 at 20.39.09.png>)

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
