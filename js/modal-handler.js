// public/js/modal-handler.js

class ProjectModal {
    constructor() {
        this.currentProject = null;
        this.currentImageIndex = 0;
        this.init();
    }

    init() {
        this.createModalHTML();
        this.bindEvents();
    }

    createModalHTML() {
        const modalHTML = `
            <div class="project-modal-overlay" id="projectModalOverlay">
                <div class="project-modal" id="projectModal">
                    <div class="modal-header">
                        <button class="modal-close-btn" id="modalCloseBtn">
                            <i class="fas fa-times"></i>
                        </button>
                        <h2 class="modal-title" id="modalTitle">Proje Başlığı</h2>
                        <p class="modal-subtitle" id="modalSubtitle">Proje kategorisi</p>
                    </div>
                    
                    <div class="modal-body">
                        <div class="project-info-grid">
                            <!-- Sol taraf - Resim Galerisi -->
                            <div class="project-gallery-section">
                                <div class="main-image-container">
                                    <img id="mainProjectImage" class="main-image" src="" alt="Proje Görseli">
                                    <div class="image-counter" id="imageCounter">1 / 1</div>
                                </div>
                                <div class="thumbnail-gallery" id="thumbnailGallery">
                                    <!-- Thumbnail'lar dinamik olarak yüklenecek -->
                                </div>
                            </div>
                            
                            <!-- Sağ taraf - Proje Detayları -->
                            <div class="project-details-section">
                                <!-- Proje Meta Bilgileri -->
                                <div class="project-meta">
                                    <div class="meta-item">
                                        <span class="meta-label">Kategori</span>
                                        <span class="meta-value" id="projectCategory">-</span>
                                    </div>
                                    <div class="meta-item">
                                        <span class="meta-label">Tarih</span>
                                        <span class="meta-value" id="projectDate">-</span>
                                    </div>
                                    <div class="meta-item">
                                        <span class="meta-label">Müşteri</span>
                                        <span class="meta-value" id="projectClient">-</span>
                                    </div>
                                    <div class="meta-item">
                                        <span class="meta-label">Durum</span>
                                        <span class="meta-value">
                                            <span class="status-badge" id="projectStatus">-</span>
                                        </span>
                                    </div>
                                </div>
                                
                                <!-- Teknolojiler -->
                                <div class="technologies-section">
                                    <h4 class="section-title">
                                        <i class="fas fa-tools"></i>
                                        Kullanılan Teknolojiler
                                    </h4>
                                    <div class="tech-tags" id="techTags">
                                        <!-- Teknoloji etiketleri dinamik olarak yüklenecek -->
                                    </div>
                                </div>
                                
                                <!-- Özellikler -->
                                <div class="features-section">
                                    <h4 class="section-title">
                                        <i class="fas fa-star"></i>
                                        Öne Çıkan Özellikler
                                    </h4>
                                    <div class="features-list" id="featuresList">
                                        <!-- Özellikler dinamik olarak yüklenecek -->
                                    </div>
                                </div>
                                
                                <!-- Açıklama -->
                                <div class="description-section">
                                    <h4 class="section-title">
                                        <i class="fas fa-info-circle"></i>
                                        Proje Detayları
                                    </h4>
                                    <div class="project-description" id="projectDescription">
                                        <!-- Açıklama dinamik olarak yüklenecek -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="modal-actions">
                        <a href="#" class="action-btn secondary" id="githubBtn" target="_blank">
                            <i class="fab fa-github"></i>
                            GitHub
                        </a>
                        <a href="#" class="action-btn primary" id="demoBtn" target="_blank">
                            <i class="fas fa-external-link-alt"></i>
                            Canlı Demo
                        </a>
                    </div>
                </div>
            </div>
        `;

        // Modal'ı body'e ekle
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    bindEvents() {
        // Modal açma butonları
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('view-project-btn')) {
                e.preventDefault();
                const projectCard = e.target.closest('.project-preview-card');
                const projectId = this.getProjectIdFromCard(projectCard);
                if (projectId) {
                    this.openModal(projectId);
                }
            }
        });

        // Modal kapatma
        const overlay = document.getElementById('projectModalOverlay');
        const closeBtn = document.getElementById('modalCloseBtn');

        closeBtn.addEventListener('click', () => this.closeModal());
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                this.closeModal();
            }
        });

        // ESC tuşu ile kapatma
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isModalOpen()) {
                this.closeModal();
            }
        });

        // Resim galerisi navigation
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('thumbnail-img')) {
                const index = parseInt(e.target.dataset.index);
                this.changeMainImage(index);
            }
        });

        // Klavye navigasyonu (ok tuşları)
        document.addEventListener('keydown', (e) => {
            if (this.isModalOpen() && this.currentProject) {
                if (e.key === 'ArrowLeft') {
                    this.previousImage();
                } else if (e.key === 'ArrowRight') {
                    this.nextImage();
                }
            }
        });
    }

    getProjectIdFromCard(card) {
        // Kart içindeki başlığa göre proje ID'sini bul
        const title = card.querySelector('h4').textContent;
        
        // projectsData'dan title'a göre ID bul
        for (const [id, project] of Object.entries(projectsData)) {
            if (project.title === title) {
                return id;
            }
        }
        return null;
    }

    async openModal(projectId) {
        if (!projectsData[projectId]) {
            console.error('Proje bulunamadı:', projectId);
            return;
        }

        this.currentProject = projectsData[projectId];
        this.currentImageIndex = 0;

        // Modal içeriğini doldur
        this.populateModal();

        // Modal'ı göster
        const overlay = document.getElementById('projectModalOverlay');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Animasyonları başlat
        this.startAnimations();
    }

    closeModal() {
        const overlay = document.getElementById('projectModalOverlay');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        
        this.currentProject = null;
        this.currentImageIndex = 0;
    }

    isModalOpen() {
        const overlay = document.getElementById('projectModalOverlay');
        return overlay.classList.contains('active');
    }

    populateModal() {
        const project = this.currentProject;

        // Başlık ve alt başlık
        document.getElementById('modalTitle').textContent = project.title;
        document.getElementById('modalSubtitle').textContent = project.category;

        // Meta bilgiler
        document.getElementById('projectCategory').textContent = project.category;
        document.getElementById('projectDate').textContent = project.date;
        document.getElementById('projectClient').textContent = project.client;
        
        // Durum badge'i
        const statusBadge = document.getElementById('projectStatus');
        statusBadge.textContent = project.status;
        statusBadge.className = 'status-badge';
        
        if (project.status.includes('Tamamlandı')) {
            statusBadge.classList.add('completed');
        } else if (project.status.includes('Aktif')) {
            statusBadge.classList.add('active');
        } else {
            statusBadge.classList.add('planning');
        }

        // Teknolojiler
        this.populateTechnologies(project.technologies);

        // Özellikler
        this.populateFeatures(project.features);

        // Açıklama
        document.getElementById('projectDescription').innerHTML = project.fullDescription;

        // Resim galerisi
        this.populateImageGallery(project.images);

        // Action butonları
        this.setupActionButtons(project);
    }

    populateTechnologies(technologies) {
        const container = document.getElementById('techTags');
        container.innerHTML = '';

        technologies.forEach((tech, index) => {
            const tag = document.createElement('span');
            tag.className = 'tech-tag fade-in';
            tag.textContent = tech;
            tag.style.animationDelay = `${index * 0.1}s`;
            container.appendChild(tag);
        });
    }

    populateFeatures(features) {
        const container = document.getElementById('featuresList');
        container.innerHTML = '';

        features.forEach((feature, index) => {
            const item = document.createElement('div');
            item.className = 'feature-item slide-up';
            item.style.animationDelay = `${index * 0.1}s`;
            item.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <span>${feature}</span>
            `;
            container.appendChild(item);
        });
    }

    populateImageGallery(images) {
        // Ana resmi ayarla
        const mainImg = document.getElementById('mainProjectImage');
        mainImg.src = images.main;
        mainImg.alt = this.currentProject.title;

        // Thumbnail galerisi
        const thumbnailContainer = document.getElementById('thumbnailGallery');
        thumbnailContainer.innerHTML = '';

        const allImages = [images.main, ...images.gallery];
        
        allImages.forEach((imageSrc, index) => {
            const thumbnail = document.createElement('div');
            thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
            thumbnail.innerHTML = `<img src="${imageSrc}" alt="Thumbnail ${index + 1}" class="thumbnail-img" data-index="${index}">`;
            thumbnailContainer.appendChild(thumbnail);
        });

        // Resim sayacını güncelle
        document.getElementById('imageCounter').textContent = `1 / ${allImages.length}`;
    }

    setupActionButtons(project) {
        const githubBtn = document.getElementById('githubBtn');
        const demoBtn = document.getElementById('demoBtn');

        // GitHub butonu
        if (project.githubLink) {
            githubBtn.href = project.githubLink;
            githubBtn.style.display = 'flex';
        } else {
            githubBtn.style.display = 'none';
        }

        // Demo butonu
        if (project.demoLink) {
            demoBtn.href = project.demoLink;
            demoBtn.style.display = 'flex';
        } else {
            demoBtn.style.display = 'none';
        }
    }

    changeMainImage(index) {
        const project = this.currentProject;
        const allImages = [project.images.main, ...project.images.gallery];
        
        if (index >= 0 && index < allImages.length) {
            this.currentImageIndex = index;
            
            // Ana resmi değiştir
            const mainImg = document.getElementById('mainProjectImage');
            mainImg.src = allImages[index];
            
            // Thumbnail'ları güncelle
            document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
                thumb.classList.toggle('active', i === index);
            });
            
            // Sayacı güncelle
            document.getElementById('imageCounter').textContent = `${index + 1} / ${allImages.length}`;
        }
    }

    nextImage() {
        const project = this.currentProject;
        if (!project) return;
        
        const allImages = [project.images.main, ...project.images.gallery];
        const nextIndex = (this.currentImageIndex + 1) % allImages.length;
        this.changeMainImage(nextIndex);
    }

    previousImage() {
        const project = this.currentProject;
        if (!project) return;
        
        const allImages = [project.images.main, ...project.images.gallery];
        const prevIndex = this.currentImageIndex === 0 ? allImages.length - 1 : this.currentImageIndex - 1;
        this.changeMainImage(prevIndex);
    }

    startAnimations() {
        // Sıralı animasyonları başlat
        setTimeout(() => {
            document.querySelectorAll('.fade-in').forEach((el, index) => {
                setTimeout(() => {
                    el.style.opacity = '1';
                }, index * 100);
            });
        }, 100);

        setTimeout(() => {
            document.querySelectorAll('.slide-up').forEach((el, index) => {
                setTimeout(() => {
                    el.style.transform = 'translateY(0)';
                    el.style.opacity = '1';
                }, index * 100);
            });
        }, 200);
    }
}

// Modal'ı başlat
document.addEventListener('DOMContentLoaded', () => {
    window.projectModal = new ProjectModal();
});

// Utility functions
const ProjectUtils = {
    // Resim yükleme hatası yönetimi
    handleImageError(img) {
        img.src = '/projectimages/placeholder.jpg';
        img.alt = 'Resim yüklenemedi';
    },

    // Lazy loading için intersection observer
    setupLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    },

    // Modal performansı için debounce
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
};

// Global error handler
window.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        ProjectUtils.handleImageError(e.target);
    }
});
