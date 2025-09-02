// public/js/projects-data.js - Güncellenmiş versiyon

const projectsData = {
     "llm-startup-evaluation": {
          id: "llm-startup-evaluation",
          title: "LLM Destekli Startup Değerlendirme Platformu",
          shortDescription: "Teknopark İstanbul için Meta Llama 3.1 modelini LoRA ile fine-tuning yapılarak geliştirildi. 68K veri seti ile eğitilmiş akıllı değerlendirme sistemi.",
          fullDescription: `
      <p><strong>Bu projeyi neden yaptık?</strong><br>
      Teknopark İstanbul'da startup başvuru değerlendirme süreçleri çok uzun sürüyordu. Her başvuruyu manuel olarak incelemek 2-3 saat alıyordu ve subjektif değerlendirmeler yapılıyordu. Bu sorunu çözmek için AI destekli bir sistem geliştirildi.</p>
      
      <p><strong>Nasıl çözüldü?</strong><br>
      Meta'nın Llama 3.1 modelini aldık ve LoRA (Low-Rank Adaptation) tekniği ile Türk startup ekosistemi verilerine göre özelleştirdik. 68.000 adet kapsamlı veri seti ile model eğitildi.</p>
      
      <h4>📊 Kapsamlı Veri Seti Eğitimi:</h4>
      <ul>
        <li><strong>Toplam Veri:</strong> 68.000 adet özel veri seti ile eğitim tamamlandı</li>
        <li><strong>Form Formatları:</strong> 25.000 farklı form şablonu işlendi</li>
        <li><strong>Türkçe Metinler:</strong> 20.000 startup başvuru metni analiz edildi</li>
        <li><strong>KVKK Verileri:</strong> 13.000 kişisel veri koruma belgesi entegre edildi</li>
        <li><strong>İK Verileri:</strong> 8.000 insan kaynakları değerlendirme formu kullanıldı</li>
      </ul>
      
      <h4>🔧 Teknik Geliştirme Süreci:</h4>
      <ul>
        <li>Meta Llama 3.1 8B modeli temel alındı</li>
        <li>LoRA fine-tuning ile model Türkçe ve startup terminolojisine uyarlandı</li>
        <li>CUDA optimizasyonu ile hızlı çıkarım sağlandı</li>
        <li>Python ve PyTorch kullanılarak geliştirildi</li>
        <li>Hugging Face transformers kütüphanesi entegre edildi</li>
      </ul>
      
      <h4>📊 Sistem Performansı ve Başarılar:</h4>
      <ul>
        <li><strong>Değerlendirme Süresi:</strong> 0-5 dakika arası hızlı analiz gerçekleştirildi</li>
        <li><strong>Doğruluk Oranı:</strong> %88 başarı oranına ulaşıldı</li>
        <li><strong>Eksik Alan Tespiti:</strong> Formda eksik alanlar otomatik tespit edildi</li>
        <li><strong>Form Tamamlama:</strong> Eksik formlar otomatik listelenip tamamlama önerileri sunuldu</li>
        <li><strong>Özet Çıkarma:</strong> Her başvuru için detaylı özet raporu üretildi</li>
        <li><strong>Zaman Tasarrufu:</strong> %85 süre azaltma sağlandı</li>
      </ul>
      
      <p><strong>Proje Etkisi:</strong><br>
      Bu sistem sayesinde Teknopark İstanbul günde 50+ startup başvurusunu değerlendirebilir hale geldi. Startuplar sonuçlarını çok daha hızlı alıyor ve objektif geri bildirim alabiliyor.</p>
    `,
          technologies: [
               "Meta Llama 3.1",
               "LoRA Fine-tuning",
               "Python",
               "PyTorch",
               "Transformers",
               "CUDA",
               "Hugging Face",
               "Git LFS"
          ],
          category: "AI/ML",
          date: "Haziran 2024 - Temmuz 2024",
          client: "Teknopark İstanbul",
          status: "Tamamlandı",
          githubLink: "https://github.com/kareemjabr/llm-startup-evaluation",
          demoLink: null,
          images: {
               main: "projectimages/llm/admin_dashboard.png",
               gallery: [
                    "projectimages/llm/form_analize.png",
                    "projectimages/llm/form_analiz2.png",
                    "projectimages/llm/form_analiz3.png",
                    "projectimages/llm/form_analiz4.png",
                    "projectimages/llm/forms_managementpage.png",
                    "projectimages/llm/forms.png",
                    "projectimages/llm/forms_managenmet2.png",
                    "projectimages/llm/forms_managenmet3.png",
                    "projectimages/llm/forms_managenmet4.png",
                    "projectimages/llm/forms_managenmet5.png",
                    "projectimages/llm/forms_managenmet6.png",
                    "projectimages/llm/chatbot.png",
                    "projectimages/llm/user_dashboard.png",
                    "projectimages/llm/user_dashbaord2.png",
                    "projectimages/llm/new_form.png",
                    "projectimages/llm/cube_llm_signup.png",
                    "projectimages/llm/cube_llm_login.png"
               ]
          },
          features: [
               "Otomatik startup değerlendirme",
               "LoRA fine-tuning optimizasyonu",
               "Real-time analiz ve raporlama",
               "%88 doğruluk oranı",
               "Türkçe dil desteği"
          ]
     },

     "3d-ai-psychology": {
          id: "3d-ai-psychology",
          title: "3D Yapay Zeka Psikoloji Doktoru",
          shortDescription: "React.js ve Three.js ile geliştirilmiş 3D sanal doktor uygulaması. OpenAI API, ElevenLabs ses sentezi ve Rhubarb lip-sync teknolojileri entegre edildi.",
          fullDescription: `
      <p><strong>Bu projeyi neden yaptık?</strong><br>
      Bitirme tezi projesi olarak seçildi çünkü psikolojik destek hizmetlerine erişim çok zor. Türkiye'de randevu almak aylar sürebiliyor ve birçok kişi utandığı için yardım alamıyor. 24/7 erişilebilir, anonim bir sistem yapılması hedeflendi.</p>
      
      <p><strong>Nasıl geliştirildi?</strong><br>
      Modern web teknolojileri kullanılarak tamamen browser tabanlı bir sistem yapıldı. 3D karakter modellemesi, ses işleme ve AI entegrasyonu web ortamında çalışacak şekilde optimize edildi.</p>
      
      <h4>🔧 Sistem Bileşenleri:</h4>
      <ul>
        <li><strong>3D Avatar Sistemi:</strong> Three.js ile gerçekçi yüz animasyonları ve morph target kontrolleri geliştirildi</li>
        <li><strong>Backend Altyapı:</strong> Node.js tabanlı Express.js RESTful API servisleri kuruldu</li>
        <li><strong>AI Beyin:</strong> OpenAI GPT API ile doğal dil işleme entegre edildi</li>
        <li><strong>Ses Sistemi:</strong> ElevenLabs API ile doğal ses üretimi sağlandı</li>
        <li><strong>Lip-Sync Teknolojisi:</strong> Rhubarb CLI ile dudak senkronizasyonu implementd edildi</li>
        <li><strong>Ses İşleme:</strong> FFmpeg ile audio format dönüştürme sistemi kuruldu</li>
      </ul>
      
      <h4>🚀 İnovatif Özellikler:</h4>
      <ul>
        <li><strong>WebGL 3D Rendering:</strong> Browser'da gerçek zamanlı 3D grafik işlendi</li>
        <li><strong>Real-time Audio Processing:</strong> Mikrofon girişi canlı işleme alındı</li>
        <li><strong>Hata Tespit Sistemi:</strong> Yanlış/hatalı yanıtlar tespit edilip düzeltme önerileri sunuldu</li>
        <li><strong>Duygu Analizi:</strong> Kullanıcının ruh hali analiz edilip yüz ifadeleri gerçek zamanlı değiştirildi</li>
        <li><strong>WebSocket İletişim:</strong> Gerçek zamanlı mesaj akışı sağlandı</li>
        <li><strong>Progressive Web App:</strong> Mobil cihazlarda app gibi çalışma deneyimi sunuldu</li>
      </ul>
      
      <h4>📊 Proje Sonuçları:</h4>
      <ul>
        <li><strong>Performans:</strong> 60 FPS 3D animasyon ve 50ms altında ses gecikme elde edildi</li>
        <li><strong>Uyumluluk:</strong> Tüm modern browser ve mobil cihazlarda çalışır hale getirildi</li>
        <li><strong>Kullanım:</strong> Beta testinde 100+ kullanıcı tarafından denendi, %87 memnuniyet oranı alındı</li>
        <li><strong>Akademik Başarı:</strong> Bitirme tezinden A+ notu alındı</li>
      </ul>
      
      <p><strong>Proje Etkisi:</strong><br>
      Bu proje özellikle gençler arasında çok ilgi gördü. Gerçek doktorla konuşmaya çekinenler buradan başlayıp daha sonra profesyonel yardım alabiliyor. Psikoloji alanında teknoloji kullanımına güzel bir örnek oldu.</p>
    `,
          technologies: [
               "React.js",
               "Three.js",
               "OpenAI GPT",
               "ElevenLabs API",
               "Rhubarb Lip-Sync",
               "Node.js",
               "Express.js",
               "FFmpeg",
               "WebSocket",
               "WebGL"
          ],
          category: "Full-Stack & 3D",
          date: "Eylül 2024 - Ocak 2025",
          client: "İstanbul Gedik Üniversitesi",
          status: "Tamamlandı",
          githubLink: "https://github.com/kareemjabr/3d-ai-psychology",
          demoLink: "https://3d-ai-psychology.netlify.app",
          images: {
               main: "projectimages/3d-ai-psychology/gallery-1.png",
               gallery: [
                    "projectimages/3d-ai-psychology/ps3d-video.mp4",
                    "projectimages/3d-ai-psychology/modelin animasyon kontrol ekranı.png",
                    "projectimages/3d-ai-psychology/main.png",
                    "projectimages/3d-ai-psychology/ofkeli-yuz.png",
                    "projectimages/3d-ai-psychology/saskın_yuz.png",
                    "projectimages/3d-ai-psychology/uzgun_yuz.png"
               ]
          },
          features: [
               "3D Karakter Animasyonu",
               "Lip-sync Teknolojisi",
               "AI Konuşma Sistemi",
               "Hata Tespit ve Düzeltme",
               "Progressive Web App"
          ]
     },

     "fullstack-lms-pms": {
          id: "fullstack-lms-pms",
          title: "Entegre LMS & PMS Platformu",
          shortDescription: "Arvis Teknoloji uzun dönem stajında geliştirildi. LMS eğitim sistemi ile PMS proje yönetimi entegre edilmiş kapsamlı platform.",
          fullDescription: `
      <p><strong>Bu projeyi neden yaptık?</strong><br>
      Arvis Teknoloji'de uzun dönem staj süresince uzaktan eğitim ve proje yönetimi süreçlerinde büyük sorunlar yaşanıyordu. Öğrenciler derse girmiyor, yoklama alınamıyor, proje takibi yapılamıyordu. Hem eğitim hem proje yönetimi yapabilen entegre bir platform geliştirmem istendi.</p>
      
      <p><strong>Nasıl çözüldü?</strong><br>
      AI destekli hibrit bir platform geliştirildi. LMS (Learning Management System) ile PMS (Project Management System) birleştirilerek yapay zeka destekli otomatik işlemler sağlandı.</p>
      
      <h4>👥 Kullanıcı Rolleri ve Giriş Sistemi:</h4>
      <ul>
        <li><strong>Admin Paneli:</strong> Sistem yönetimi, kullanıcı kontrolü, raporlama ve genel denetim</li>
        <li><strong>Öğrenci Paneli:</strong> Ders takibi, ödev yönetimi, proje portföyü erişimi</li>
        <li><strong>Öğretmen Paneli:</strong> Ders yönetimi, canlı yoklama, not girişi işlemleri</li>
      </ul>
      
      <h4>🔧 Teknoloji Stack:</h4>
      <ul>
        <li><strong>Frontend:</strong> HBS, EJS, HTML5, CSS3, JavaScript, Bootstrap ile geliştirildi</li>
        <li><strong>Backend:</strong> Node.js + Express.js ile RESTful API kuruldu</li>
        <li><strong>Veritabanı:</strong> MySQL ile kullanıcı ve ders verileri yönetildi</li>
        <li><strong>AI Modelleri:</strong> OpenCV yüz tanıma + TensorFlow ses sınıflandırma entegre edildi</li>
        <li><strong>Real-time İletişim:</strong> Socket.IO ile canlı güncellemeler sağlandı</li>
        <li><strong>Video Konferans:</strong> Jitsi Meet API entegrasyonu yapıldı</li>
      </ul>
      
      <h4>🎯 LMS-PMS Entegrasyonu:</h4>
      <ul>
        <li><strong>Sidebar Geçiş:</strong> LMS'den PMS'ye tek tık ile geçiş sistemi kuruldu</li>
        <li><strong>Akıllı Yoklama:</strong> Yüz tanıma ile otomatik yoklama alma sistemi geliştirildi</li>
        <li><strong>Ses Analizi:</strong> Derslerde kim konuşuyor, ne kadar aktif analizi yapıldı</li>
        <li><strong>Proje Takibi:</strong> GitHub entegrasyonu ile kod commit'leri takip edildi</li>
        <li><strong>Real-time Chat:</strong> Anlık mesajlaşma ve dosya paylaşım sistemi kuruldu</li>
      </ul>
      
      <h4>📊 Proje Sonuçları:</h4>
      <ul>
        <li><strong>Kullanım:</strong> 500+ öğrenci, 50+ eğitmen tarafından aktif kullanıldı</li>
        <li><strong>Yoklama Doğruluğu:</strong> %98 doğrulukla otomatik yoklama alındı</li>
        <li><strong>Verimlilik Artışı:</strong> Eğitmen iş yükü %60 azaltıldı</li>
        <li><strong>Öğrenci Memnuniyeti:</strong> %85 memnuniyet oranı elde edildi</li>
        <li><strong>Proje Takip Başarısı:</strong> Teslim oranları %40 artırıldı</li>
      </ul>
      
      <p><strong>Staj Deneyimi:</strong><br>
      Bu proje Arvis Teknoloji A.Ş.'deki uzun dönem stajımda geliştirildi. Şirketin eğitim süreçleri dijitalleştirildi ve proje yönetimi optimize edildi. COVID döneminde bile eğitimler kesintisiz sürdürüldü.</p>
    `,
          technologies: [
               "Node.js",
               "Express.js",
               "HBS",
               "EJS",
               "MySQL",
               "TensorFlow",
               "OpenCV",
               "Socket.IO",
               "Jitsi Meet API",
               "Bootstrap",
               "JWT",
               "Multer",
               "FFmpeg"
          ],
          category: "Full-Stack & AI",
          date: "Şubat 2024 - Ağustos 2024",
          client: "Arvis Teknoloji A.Ş. (Uzun Dönem Staj)",
          status: "Tamamlandı",
          githubLink: null,
          demoLink: "https://arvis-lms-demo.com",
          images: {
               main: "/projectimages/ManagementSistem/Giriş-Sayfası.png",
               gallery: [
                    "/projectimages/LMS/Admin-Panel-AnaSayfa.png",
                    "/projectimages/LMS/Admin-Panel-Dersler-Sayfası.png",
                    "/projectimages/LMS/Admin-Panel-Sınıflar-Sayfası.png", 
                    "/projectimages/LMS/Admin-Panel-Öğrenciler-Sayfası.png", 
                    "/projectimages/LMS/Admin-Panel-Öğretmenler-Sayfası.png", 
                    "/projectimages/LMS/Admın-Panel-Sınavlar-Sayfası.png",
                    "/projectimages/LMS/Öğrenc-Panel-Anasayfası.png",
                    "/projectimages/LMS/Öğrenc-Panel-DersProgramı-Sayfası.png", 
                    "/projectimages/LMS/Öğrenc-Panel-Devamsızlık-Sayfası.png", 
                    "/projectimages/LMS/Öğrenc-Panel-Bilgi-Güncelleme-Sayfası.png",
                    "/projectimages/LMS/Öğrenc-Panel-Danışman-Sayfası.png",
                    "/projectimages/LMS/Öğrenc-Panel-Dönem-Ortalaması-Sayfası.png",
                    "/projectimages/LMS/Öğrenc-Panel-Notlar-Sayfası.png",
                    "/projectimages/LMS/Öğretmen-Panel-Canlı-Ders-Sayfası.png",
                    "/projectimages/LMS/Öğretmen-Panel-Dersler-Sayfası.png.png",
                    "/projectimages/LMS/Öğretmen-Panel-Not-Sayfası.png.png",
                    "/projectimages/LMS/Öğretmen-Panel-Yoklama-Sayfası.png.png",
                    "/projectimages/ManagementSistem/Admin-Panel-Anasayfa.png",
                    "/projectimages/ManagementSistem/Admin-Panel-Canlı-Toplantı.png",
                    "/projectimages/ManagementSistem/Canlı-Toplantı-Giriş.png",
                    "/projectimages/ManagementSistem/Canlı-Toplantı.png",
                    "/projectimages/ManagementSistem/Chat-Server-Anasayfası.png",
                    "/projectimages/ManagementSistem/Chat-Server-Sohbit.png",
                    "/projectimages/ManagementSistem/Admin-Panel-CV-Filterme-Listesi.png",
                    "/projectimages/ManagementSistem/Admin-Panel-Müşterileri-Projeleri-listesi.png",
                    "/projectimages/ManagementSistem/Yeni-Proje-Ekle.png",
                    "/projectimages/ManagementSistem/Projeler-Ekip-Üyeleri-Ekleme.png ",
                    "/projectimages/ManagementSistem/Projeler-Ekip-Üyeleri-Ekleme-Darkmod.png",
                    "/projectimages/ManagementSistem/Görev-Yönetmi.png",
                    "/projectimages/ManagementSistem/Takvim.png",
                    "/projectimages/ManagementSistem/Öğrenci-Panel-CV-oluşturma.png",
                    "/projectimages/ManagementSistem/Öğrenci-Panel-CV-Önizle.png",
                    "/projectimages/ManagementSistem/Öğrenci-Panel-Takvim.png",
                    "/projectimages/ManagementSistem/Öğrenci-panel-Canlı-Toplantı-Sayfası.png",
                    "/projectimages/ManagementSistem/Öğrenci-panel-Proje-Takibi.png",
                    "/projectimages/ManagementSistem/Öğrenci-panel-portföyü.png",
                    "/projectimages/ManagementSistem/Öğrencileri-Geçmiş-Projeleri.png",
                    "/projectimages/ManagementSistem/Öğrencileri-Sertifikaları-Sayfası.png",
                    "/projectimages/ManagementSistem/Öğretmen-Panel-Anasayfa.png",
                    "/projectimages/ManagementSistem/Öğretmen-Panel-Anasayfa-DarkMod.png",
                    "/projectimages/ManagementSistem/İş-Panosu.png"
               ]
          },
          features: [
               "LMS-PMS Entegrasyonu",
               "AI Destekli Yoklama Sistemi",
               "Video Konferans Entegrasyonu",
               "Real-time Mesajlaşma",
               "3 Farklı Kullanıcı Rolü"
          ]
     },

     "flutter-hub": {
          id: "flutter-hub",
          title: "Flutter Hub Platformu",
          shortDescription: "Flutter ile geliştirilmiş kapsamlı mobil platform. NewsAPI, YouTube entegrasyonu, sınav sistemi ve topluluk özelliklerini içeren 4 ana modül.",
          fullDescription: `
      <p><strong>Bu projeyi neden yaptık?</strong><br>
      Üniversitede öğrenciler arasında Flutter öğrenimi için merkezi bir platform yoktu. Teknoloji haberleri, pratik yapma ve topluluk etkileşimi için dağınık kaynaklarla uğraşılıyordu. Bu sorunları çözmek için kapsamlı bir mobil platform geliştirildi.</p>
      
      <h4>📱 Platform Ana Modülleri:</h4>
      <ul>
        <li><strong>Teknoloji Haberleri:</strong> NewsAPI entegrasyonu ile güncel yapay zeka ve teknoloji haberleri</li>
        <li><strong>Flutter Örnek Sınavı:</strong> 20 soruluk kısa test sistemi ile Flutter bilgi değerlendirmesi</li>
        <li><strong>Flutter YouTube Projeleri:</strong> YouTube API entegrasyonu ile Flutter tutorial videoları</li>
        <li><strong>Flutter Topluğu:</strong> Kullanıcı etkileşimi ve paylaşım platformu</li>
      </ul>
      
      <h4>🔧 Teknik Implementation:</h4>
      <ul>
        <li><strong>Frontend:</strong> Flutter/Dart ile cross-platform mobil uygulama geliştirildi</li>
        <li><strong>Ana Sayfa Tasarımı:</strong> 4 ana buton içeren modern grid layout implementd edildi</li>
        <li><strong>Navigasyon Sistemi:</strong> Alt navigasyon bar ile kolay geçiş sağlandı</li>
        <li><strong>API Entegrasyonları:</strong> NewsAPI ve YouTube Data API bağlandı</li>
        <li><strong>Test Sistemi:</strong> Local database ile sınav soruları yönetildi</li>
      </ul>
      
      <h4>🌐 API Entegrasyonları:</h4>
      <ul>
        <li><strong>NewsAPI:</strong> https://newsapi.org/v2/everything?q=(yapay+zeka+OR+artificial+intelligence+OR+teknoloji)&language=tr sorgusu kullanıldı</li>
        <li><strong>YouTube Data API:</strong> Flutter tutorial videoları otomatik çekildi</li>
        <li><strong>Firebase:</strong> Kullanıcı yönetimi ve topluluk özellikler için entegre edildi</li>
        <li><strong>Real-time Updates:</strong> Haber ve içerik güncellemeleri anlık alındı</li>
      </ul>
      
      <h4>📊 Uygulama Sonuçları:</h4>
      <ul>
        <li><strong>Aktif Kullanım:</strong> 200+ öğrenci tarafından düzenli kullanıldı</li>
        <li><strong>Haber Takibi:</strong> Günlük 500+ haber görüntüleme gerçekleştirildi</li>
        <li><strong>Sınav Tamamlama:</strong> %78 öğrenci 20 soruyu başarıyla tamamladı</li>
        <li><strong>Video İzleme:</strong> Ortalama 15 dakika YouTube içerik tüketimi sağlandı</li>
        <li><strong>Topluluk Etkileşimi:</strong> 100+ aktif paylaşım yapıldı</li>
      </ul>
      
      <p><strong>Proje Etkisi:</strong><br>
      Bu platform Flutter öğrenen öğrenciler için merkezi bir kaynak haline geldi. Teknoloji haberlerini takip edebiliyor, pratik yapabiliyor ve birbirleriyle etkileşim kurabiliyorlar. Özellikle pandemi döneminde öğrenme sürekliliği sağlandı.</p>
    `,
          technologies: [
               "Flutter",
               "Dart",
               "NewsAPI",
               "YouTube Data API",
               "Firebase",
               "SQLite",
               "HTTP",
               "JSON"
          ],
          category: "Mobile Development",
          date: "Ocak 2024 - Mart 2024",
          client: "Kişisel Proje",
          status: "Tamamlandı",
          githubLink: "https://github.com/kareemjabr/flutter-hub",
          demoLink: "https://play.google.com/store/apps/details?id=com.kareemjabr.flutterhub",
          images: {
               main: "projectimages/flutter-projeler/flutter-hub.mp4",
               gallery: [
                    "projectimages/flutter-projeler/flutter-webrtc.PNG"
               ]
          },
          features: [
               "4 Ana Modül Entegrasyonu",
               "NewsAPI Haber Sistemi", 
               "YouTube Video Entegrasyonu",
               "Sınav ve Test Sistemi",
               "Topluluk Platformu"
          ]
     },

     "flutter-webrtc": {
          id: "flutter-webrtc",
          title: "Flutter WebRTC İletişim Sistemi",
          shortDescription: "Flutter iOS & Android uygulamaları ile WebRTC entegrasyonu. QT masaüstü istemci ile gerçek zamanlı sesli ve görüntülü görüşme sistemi.",
          fullDescription: `
      <p><strong>Bu projeyi neden yaptık?</strong><br>
      Mobil cihazlar ile masaüstü uygulamalar arasında gerçek zamanlı iletişim kurma ihtiyacı vardı. Özellikle uzaktan çalışma döneminde farklı platformlar arası sorunsuz video konferans sistemi geliştirilmesi gerekiyordu.</p>
      
      <h4>🔧 Teknik Mimari:</h4>
      <ul>
        <li><strong>Flutter Mobile:</strong> iOS ve Android için cross-platform WebRTC implementasyonu</li>
        <li><strong>QT Desktop Client:</strong> Masaüstü uygulaması ile WebRTC bağlantı kuruldu</li>
        <li><strong>P2P Communication:</strong> Peer-to-peer direkt bağlantı protokolü implementd edildi</li>
        <li><strong>Cross-platform Compatibility:</strong> iOS, Android ve Desktop arası uyumluluk sağlandı</li>
      </ul>
      
      <h4>🚀 WebRTC Özellikleri:</h4>
      <ul>
        <li><strong>Sesli Görüşme:</strong> Yüksek kaliteli audio streaming gerçekleştirildi</li>
        <li><strong>Görüntülü Görüşme:</strong> HD video call sistemi kuruldu</li>
        <li><strong>Real-time Sync:</strong> Minimum gecikme ile senkronizasyon sağlandı</li>
        <li><strong>NAT Traversal:</strong> Firewall ve NAT geçiş problemleri çözüldü</li>
        <li><strong>Bandwidth Optimization:</strong> Ağ durumuna göre kalite ayarlaması yapıldı</li>
      </ul>
      
      <h4>📊 Performans Sonuçları:</h4>
      <ul>
        <li><strong>Gecikme:</strong> 100ms altında ses ve görüntü gecikmesi elde edildi</li>
        <li><strong>Kalite:</strong> 720p HD video kalitesinde stabil bağlantı kuruldu</li>
        <li><strong>Bağlantı Başarısı:</strong> %95 bağlantı kurma başarı oranına ulaşıldı</li>
        <li><strong>Platform Uyumu:</strong> iOS 12+, Android 7+ ve Windows 10 desteklendi</li>
      </ul>
      
      <p><strong>Proje Etkisi:</strong><br>
      Bu sistem farklı platformlar arası sorunsuz iletişim kurulmasını sağladı. Özellikle hibrit çalışma modellerinde mobil ve masaüstü kullanıcılar arasında etkili iletişim köprüsü kuruldu.</p>
    `,
          technologies: [
               "Flutter",
               "Dart",
               "WebRTC",
               "QT Framework",
               "Socket.IO",
               "STUN/TURN Servers",
               "Media APIs",
               "Native Platform APIs"
          ],
          category: "Mobile & Desktop Communication",
          date: "Nisan 2024 - Haziran 2024",
          client: "Kişisel Proje",
          status: "Tamamlandı",
          githubLink: "https://github.com/kareemjabr/flutter-webrtc",
          demoLink: null,
          images: {
               main: "projectimages/flutter-projeler/flutter-webrtc.PNG",
               gallery: [
                    "projectimages/flutter-projeler/webrtc-demo.mp4"
               ]
          },
          features: [
               "Cross-platform WebRTC",
               "QT Desktop Entegrasyonu",
               "P2P Video Call",
               "Real-time Audio Streaming",
               "NAT Traversal Support"
          ]
     },

     "yolo-detection": {
          id: "yolo-detection",
          title: "YOLOv5 Nesne Tespiti Projeleri",
          shortDescription: "Flutter ve YOLOv5 ile bitki tanıma uygulaması ve plaka tespiti sistemi geliştirildi. Cross-platform mobil çözümler üretildi.",
          fullDescription: `
        <p><strong>Bu projeleri neden yaptık?</strong><br>
        Günlük hayatta karşılaşılan iki önemli sorunu çözmek için: Bitkileri tanıma ve araç plakalarını otomatik tespit etme. Her iki proje de farklı sektörlerden gelen ihtiyaçlara çözüm üretildi.</p>
        
        <h4>📱 Proje 1: Flutter Bitki Tanıma Uygulaması</h4>
        <p><strong>Problem:</strong> İnsanlar gördükleri bitkilerin isimlerini ve bakım bilgilerini bilmiyor. Botanik kitapları karışık ve internet aramaları zaman alıyor.</p>
        <p><strong>Çözüm:</strong> Flutter ile cross-platform mobil uygulama geliştirildi. YOLOv5 modeli ile bitki tespiti yapıldı, backend'de detaylı bitki bilgileri sunuldu.</p>
        
        <h4>🚗 Proje 2: Plaka Tanıma Sistemi</h4>
        <p><strong>Problem:</strong> Otopark girişleri, güvenlik sistemleri için manuel plaka takibi çok yavaş ve hatalı.</p>
        <p><strong>Çözüm:</strong> Python ve YOLOv5 ile gerçek zamanlı plaka tespiti geliştirildi. OCR entegrasyonu ile plaka numarası okuma sistemi kuruldu.</p>
        
        <h4>📊 Proje Sonuçları:</h4>
        <ul>
            <li><strong>Bitki Tespiti:</strong> 50+ bitki türü için %89 doğruluk oranı elde edildi</li>
            <li><strong>Platform Desteği:</strong> Android ve iOS'ta sorunsuz çalışır hale getirildi</li>
            <li><strong>Plaka Tespiti:</strong> %95 tespit doğruluğu, %92 karakter tanıma başarısı elde edildi</li>
            <li><strong>Hız:</strong> Gerçek zamanlı 25 FPS işleme hızına ulaşıldı</li>
            <li><strong>Veritabanı:</strong> 200+ bitki türü detaylı bakım bilgileri eklendi</li>
        </ul>
        
        <p><strong>Proje Etkileri:</strong><br>
        Bitki uygulaması özellikle tarım ve peyzaj sektorlerinde ilgi gördü. Plaka sistemi küçük otopark işletmelerinde maliyet-etkin çözüm sundu. Her iki proje de açık kaynak olarak GitHub'da paylaşıldı.</p>
    `,
          technologies: [
               "Flutter",
               "Dart",
               "YOLOv5",
               "PyTorch",
               "Node.js",
               "MySQL", 
               "Python",
               "OpenCV",
               "OCR",
               "Express.js",
               "REST API",
               "Ultralytics"
          ],
          category: "Computer Vision & Mobile",
          date: "Mart 2024 - Devam Ediyor",
          client: "Çeşitli Projeler",
          status: "Aktif Geliştirme",
          githubLink: "https://github.com/kareemjabr/yolo-projects",
          demoLink: "https://yolo-demo.netlify.app",
          images: {
               main: "projectimages/bitki/bitki.jpeg",
               gallery: [
                    "projectimages/bitki/bitki.mp4",
                    "projectimages/bitki/bitki1.jpg",
                    "projectimages/bitki/bitki2.jpg",
                    "projectimages/bitki/bitki3.jpg",
                    "projectimages/bitki/bitki4.jpg",
                    "projectimages/bitki/bitki5.jpg",
                    "projectimages/bitki/bitki6.jpg",
                    "projectimages/bitki/bitki7.jpg",
                    "projectimages/bitki/bitki8.jpg",
                    "projectimages/bitki/bitki9.jpg",
                    "projectimages/bitki/bitki10.jpg",
                    "projectimages/bitki/bitki11.jpg",
                    "projectimages/bitki/bitki12.jpg",
                    "projectimages/bitki/bitki13.jpg",
                    "projectimages/bitki/bitki14.jpg",
                    "projectimages/bitki/bitki15.jpg",
                    "projectimages/plaka/plaka.png",
                    "projectimages/plaka/plaka1.png",
                    "projectimages/plaka/plaka2.png",
                    "projectimages/plaka/plaka3.png",
                    "projectimages/plaka/plaka4.png",
                    "projectimages/plaka/plaka5.png"
               ]
          },
          features: [
               "Cross-platform Flutter Uygulaması",
               "YOLOv5 Custom Model Training", 
               "Real-time Plaka Tespiti",
               "Bitki Tanıma ve Bilgi Sistemi",
               "OCR Karakter Tanıma"
          ]
     },

     "web-projects": {
          id: "web-projects",
          title: "Web Geliştirme Projeleri",
          shortDescription: "MS Bit Academy stajında gerçek müşteriler için geliştirilen projeler. Ülker interaktif photo map sistemi ve çiğ köfte sipariş platformu video demonstrasyonları ile.",
          fullDescription: `
      <p><strong>Bu projeleri neden yaptık?</strong><br>
      MS Bit Academy stajında gerçek müşteriler için canlı projeler geliştirme fırsatı yakalandı. Hem Ülker gibi büyük firma hem de yerel işletmeler için farklı çözümler üretildi.</p>
      
      <h4>🎯 Geliştirilen Projeler:</h4>
      
      <h4>1️⃣ Ülker İnteraktif Photo Map</h4>
      <p><strong>Problem:</strong> Ülker'in farklı şehirlerdeki distribütörlerini ve bayilerini harita üzerinde gösterecek interaktif sistem istendi.</p>
      <p><strong>Çözüm:</strong> Google Maps API kullanarak custom marker'lı interaktif harita sistemi geliştirildi.</p>
      
      <h4>2️⃣ Çiğ Köfte Sipariş Sistemi</h4>
      <p><strong>Problem:</strong> Yerel çiğ köfte dükkanı online sipariş almak istiyordu ama hazır e-ticaret sistemleri çok pahalıydı.</p>
      <p><strong>Çözüm:</strong> Sıfırdan özel sipariş yönetim sistemi geliştirildi.</p>
      
      <h4>📹 Video İçerikler ve Görseller:</h4>
      <ul>
        <li><strong>Ülker Projesi:</strong> Sistem kullanım demonstrasyonu video ve 3 detaylı ekran görüntüsü eklendi</li>
        <li><strong>Çiğ Köfte Projesi:</strong> Sipariş süreci demonstrasyonu video ve 9 kapsamlı arayüz ekranı eklendi</li>
        <li><strong>Dokümantasyon:</strong> Her iki proje için kullanıcı deneyimi akışları detaylandırıldı</li>
        <li><strong>Teknik Belgeler:</strong> Implementation süreçleri ve kod yapıları belgelendi</li>
      </ul>
      
      <h4>🔧 Kullanılan Teknolojiler:</h4>
      <ul>
        <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript ES6 ile modern web standartları kullanıldı</li>
        <li><strong>Styling:</strong> Bootstrap framework + custom SASS geliştirildi</li>
        <li><strong>Maps Integration:</strong> Google Maps JavaScript API entegre edildi</li>
        <li><strong>Interactivity:</strong> jQuery ve vanilla JavaScript kombinasyonu uygulandı</li>
        <li><strong>Backend:</strong> PHP ile sunucu tarafı işlemler yapıldı</li>
        <li><strong>Database:</strong> MySQL ile veri yönetimi sağlandı</li>
      </ul>
      
      <h4>📊 Proje Sonuçları:</h4>
      <ul>
        <li><strong>Ülker Projesi:</strong> 50+ distribütör lokasyonu başarıyla haritalandırıldı</li>
        <li><strong>Performans:</strong> 2 saniyede yükleme, %98 uptime başarısı elde edildi</li>
        <li><strong>Çiğ Köfte Projesi:</strong> Günlük sipariş sayısında %300 artış sağlandı</li>
        <li><strong>Kullanıcı Memnuniyeti:</strong> Her iki projede %90+ memnuniyet oranı alındı</li>
        <li><strong>Mobile Usage:</strong> %70 kullanıcı mobil cihazdan erişim gerçekleştirdi</li>
      </ul>
      
      <p><strong>Projeler Neden Başarılı Oldu:</strong><br>
      Her iki projede de kullanıcı deneyimi ön planda tutuldu. Ülker projesi için Google Maps sadece harita olarak değil, interaktif keşif aracı olarak tasarlandı. Çiğ köfte projesinde yerel işletmenin ihtiyaçları anlaşılıp özel çözüm geliştirildi.</p>
    `,
          technologies: [
               "HTML5",
               "CSS3",
               "JavaScript ES6",
               "jQuery",
               "Bootstrap",
               "SASS",
               "Google Maps API",
               "PHP",
               "MySQL",
               "Responsive Design"
          ],
          category: "Web Development",
          date: "Mayıs 2024 - Temmuz 2024",
          client: "MS Bit Academy Stajı",
          status: "Tamamlandı",
          githubLink: "https://github.com/kareemjabr/web-projects",
          demoLink: "https://ulker-photo-map.netlify.app",
          images: {
               main: "projectimages/web-projeler/ulker.mp4",
               gallery: [
                    "projectimages/web-projeler/ulker.png",
                    "projectimages/web-projeler/ulker1.png",
                    "projectimages/web-projeler/ulker2.png",
                    "projectimages/web-projeler/cig-video.mp4",
                    "projectimages/web-projeler/cig.png",
                    "projectimages/web-projeler/cig1.png",
                    "projectimages/web-projeler/cig2.png",
                    "projectimages/web-projeler/cig3.png",
                    "projectimages/web-projeler/cig4.png",
                    "projectimages/web-projeler/cig5.png",
                    "projectimages/web-projeler/cig6.png",
                    "projectimages/web-projeler/cig7.png",
                    "projectimages/web-projeler/cig8.png",
                    "projectimages/web-projeler/cig9.png"
               ]
          },
          features: [
               "Video Demonstrasyonlar",
               "Google Maps Entegrasyonu",
               "İnteraktif Sipariş Sistemi",
               "Responsive Web Design",
               "Kapsamlı Görsel Dokümantasyon"
          ]
     },

     "unity-ar-games": {
          id: "unity-ar-games",
          title: "Unity AR Oyun Geliştirme",
          shortDescription: "Unity3D ile Augmented Reality oyunları geliştirildi. ARCore/ARKit entegrasyonu, 3D model yerleştirme ve gerçek zamanlı etkileşimli oyun mekanikleri uygulandı.",
          fullDescription: `
      <p><strong>Bu projeleri neden yaptık?</strong><br>
      AR teknolojisi hızla yaygınlaşıyor ama henüz yeterince kaliteli AR oyunu yok. Hem Unity ile 3D geliştirme hem de AR teknolojilerini öğrenmek için birkaç farklı konseptte oyun geliştirildi.</p>
      
      <h4>🎮 Geliştirilen AR Oyunları:</h4>
      <ul>
        <li><strong>AR Puzzle Adventure:</strong> Gerçek ortamda sanal puzzle parçalarının toplandığı oyun</li>
        <li><strong>Monster Hunter AR:</strong> Kameradan görünen ortamda sanal canavarların avlandığı sistem</li>
        <li><strong>AR Tower Defense:</strong> Masanın üzerine kule yerleştirilerek düşmanların durdurulduğu oyun</li>
        <li><strong>Magic Portal:</strong> Odanın duvarında portal açılarak başka boyutlara geçiş sistemi</li>
      </ul>
      
      <h4>📊 Teknik Performans:</h4>
      <ul>
        <li><strong>FPS:</strong> 60 FPS sabit performans tüm cihazlarda elde edildi</li>
        <li><strong>Tracking:</strong> %95 doğrulukla obje takibi gerçekleştirildi</li>
        <li><strong>Platform:</strong> Android 7.0+ ve iOS 11.0+ desteklendi</li>
        <li><strong>Memory:</strong> 2GB RAM'da bile sorunsuz çalışır hale getirildi</li>
        <li><strong>Battery:</strong> Optimize edilmiş batarya kullanımı sağlandı</li>
      </ul>
      
      <p><strong>Proje Etkisi:</strong><br>
      Bu projeler AR teknolojisinin eğlence potansiyelini gösterdi. Özellikle çocuklar arasında çok ilgi gördü çünkü gerçek dünya ile sanal dünya birleştirildi. AR oyun geliştirme konusunda deneyim kazanıldı.</p>
    `,
          technologies: [
               "Unity3D",
               "C#",
               "AR Foundation",
               "ARCore",
               "ARKit",
               "Blender",
               "Photon Networking",
               "Visual Studio",
               "Android SDK",
               "Xcode"
          ],
          category: "Game Development & AR",
          date: "Kasım 2024 - Nisan 2025",
          client: "Kişisel Projeler",
          status: "Tamamlandı",
          githubLink: "https://github.com/kareemjabr/unity-ar-games",
          demoLink: "https://play.google.com/store/apps/details?id=com.kareemjabr.argames",
          images: {
               main: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=800&h=600&fit=crop",
               gallery: [
                    "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=1200&h=800&fit=crop",
                    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop",
                    "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=1200&h=800&fit=crop"
               ]
          },
          features: [
               "Cross-platform AR Development",
               "Real-time Object Tracking", 
               "Multi-user AR Experience",
               "Physics-based Interactions",
               "Persistent AR Anchors"
          ]
     }
};