// Restaurant Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Chatbot functionality
    const chatbotButton = document.getElementById('chatbot-button');
    const chatbotContainer = document.getElementById('chatbot-container');
    const closeChatbot = document.getElementById('close-chatbot');

    // Show chatbot when button is clicked
    chatbotButton.addEventListener('click', function() {
        chatbotContainer.style.display = 'flex';
        chatbotButton.style.display = 'none';
        
        // Focus on input field
        setTimeout(() => {
            const userInput = document.getElementById('user-input');
            if (userInput) {
                userInput.focus();
            }
        }, 100);
    });

    // Hide chatbot when close button is clicked
    closeChatbot.addEventListener('click', function() {
        chatbotContainer.style.display = 'none';
        chatbotButton.style.display = 'flex';
    });

    // Hide chatbot when clicking outside
    document.addEventListener('click', function(e) {
        if (!chatbotContainer.contains(e.target) && 
            !chatbotButton.contains(e.target) && 
            chatbotContainer.style.display === 'flex') {
            chatbotContainer.style.display = 'none';
            chatbotButton.style.display = 'flex';
        }
    });

    // CTA Button functionality
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            // Show chatbot for booking
            chatbotContainer.style.display = 'flex';
            chatbotButton.style.display = 'none';
            
            // Auto-send booking message
            setTimeout(() => {
                const userInput = document.getElementById('user-input');
                const sendBtn = document.getElementById('send-btn');
                if (userInput && sendBtn) {
                    userInput.value = 'Tôi muốn đặt bàn';
                    sendBtn.click();
                }
            }, 200);
        });
    }

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });

    // Menu item hover effects
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.menu-item, .about-text, .about-image, .contact-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Mobile menu toggle (if needed)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Initialize chatbot with restaurant-specific context
    initializeRestaurantChatbot();
});

// Initialize restaurant-specific chatbot
function initializeRestaurantChatbot() {
    // Override the original chatbot system message for restaurant context
    if (window.chatbotSystemMessage) {
        window.chatbotSystemMessage = `Bạn là trợ lý AI của Nhà Hàng Việt Nam, chuyên về ẩm thực Việt Nam truyền thống. 

Nhiệm vụ của bạn:
1. Tư vấn về các món ăn Việt Nam
2. Hỗ trợ đặt bàn và đặt món
3. Cung cấp thông tin về giờ mở cửa, địa chỉ
4. Tư vấn về giá cả và khẩu phần
5. Thu thập thông tin khách hàng để đặt bàn

Thông tin nhà hàng:
- Địa chỉ: 123 Đường ABC, Quận 1, TP.HCM
- Điện thoại: 028 1234 5678
- Giờ mở cửa: Thứ 2 - Chủ Nhật: 7:00 - 22:00
- Chuyên về: Phở, Bún chả, Gỏi cuốn, Cơm tấm và các món Việt Nam truyền thống

Luôn lịch sự, nhiệt tình và sẵn sàng hỗ trợ khách hàng.`;
    }

    // Add restaurant-specific quick replies
    const quickReplies = [
        'Tôi muốn đặt bàn',
        'Xem thực đơn',
        'Giờ mở cửa',
        'Địa chỉ nhà hàng',
        'Giá cả thế nào?'
    ];

    // Create quick reply buttons if they don't exist
    if (!document.querySelector('.quick-replies')) {
        const quickRepliesContainer = document.createElement('div');
        quickRepliesContainer.className = 'quick-replies';
        quickRepliesContainer.style.cssText = `
            padding: 10px;
            border-top: 1px solid #eee;
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
        `;

        quickReplies.forEach(reply => {
            const button = document.createElement('button');
            button.textContent = reply;
            button.style.cssText = `
                background: #f0f0f0;
                border: none;
                padding: 5px 10px;
                border-radius: 15px;
                font-size: 12px;
                cursor: pointer;
                transition: background 0.3s ease;
            `;
            
            button.addEventListener('click', function() {
                const userInput = document.getElementById('user-input');
                if (userInput) {
                    userInput.value = reply;
                    document.getElementById('send-btn').click();
                }
            });
            
            quickRepliesContainer.appendChild(button);
        });

        // Insert quick replies before input area
        const inputArea = document.querySelector('.input-area');
        if (inputArea && chatbotContainer) {
            chatbotContainer.insertBefore(quickRepliesContainer, inputArea);
        }
    }
}
