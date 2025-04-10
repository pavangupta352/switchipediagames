// Wait for document to load
document.addEventListener('DOMContentLoaded', () => {
    "use strict";
    
    // Create CRT overlay immediately to ensure it's available
    createCRTOverlay();
    
    // Initialize Galaga elements
    createGalagaElements();
    
    // Initialize the site immediately (no preloader)
    initSite();
    
    // Initialize site content and trigger animations
    function initSite() {
        // Trigger animations when site is loaded
        animateHeroElements();
        // Force a check for elements in viewport
        animateOnScroll();
        // Initialize featured videos
        initVideoCards();
        // Initialize contact section
        initContactSection();
        // Fix potential visibility issues
        fixVisibilityIssues();
    }

    // Function to fix visibility issues
    function fixVisibilityIssues() {
        // Fix featured videos section
        const featuredVideos = document.querySelectorAll('.video-card.featured');
        featuredVideos.forEach(card => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            
            // Ensure all child elements are visible
            const elements = card.querySelectorAll('*');
            elements.forEach(el => {
                el.style.opacity = '1';
            });
        });
        
        // Fix contact section
        const contactSection = document.querySelector('.contact-section');
        if (contactSection) {
            contactSection.style.opacity = '1';
            
            // Make sure form elements are visible
            const formElements = contactSection.querySelectorAll('input, textarea, label, h3, p, .btn');
            formElements.forEach(el => {
                el.style.opacity = '1';
                el.style.visibility = 'visible';
            });
        }
        
        // Ensure all section headers are visible
        const sectionHeaders = document.querySelectorAll('.section-header');
        sectionHeaders.forEach(header => {
            header.style.opacity = '1';
            header.style.visibility = 'visible';
            
            const elements = header.querySelectorAll('*');
            elements.forEach(el => {
                el.style.opacity = '1';
                el.style.visibility = 'visible';
            });
        });
    }

    // Initialize contact section
    function initContactSection() {
        const contactForm = document.getElementById('contactForm');
        const contactInfo = document.querySelector('.contact-info');
        
        if (contactForm) {
            contactForm.style.opacity = '1';
            
            // Make form elements visible
            const formElements = contactForm.querySelectorAll('input, textarea, button, label');
            formElements.forEach(el => {
                el.style.opacity = '1';
                el.style.visibility = 'visible';
            });
        }
        
        if (contactInfo) {
            contactInfo.style.opacity = '1';
            
            // Make info elements visible
            const infoElements = contactInfo.querySelectorAll('.info-item, .subscribe-card');
            infoElements.forEach(el => {
                el.style.opacity = '1';
                el.style.visibility = 'visible';
            });
        }
    }

    // Initialize video cards
    function initVideoCards() {
        const videoCards = document.querySelectorAll('.video-card');
        
        videoCards.forEach(card => {
            // Ensure the card is visible
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            
            // Make thumbnail and info visible
            const thumbnail = card.querySelector('.video-thumbnail');
            const info = card.querySelector('.video-info');
            
            if (thumbnail) thumbnail.style.opacity = '1';
            if (info) info.style.opacity = '1';
            
            // Ensure play button is properly styled
            const playButton = card.querySelector('.play-button');
            if (playButton) {
                playButton.style.opacity = '0'; // Start hidden
                playButton.style.transform = 'translate(-50%, -50%) scale(0.9)';
            }
        });
    }

    // Create CRT overlay
    function createCRTOverlay() {
        if (!document.querySelector('.crt-overlay')) {
            const overlay = document.createElement('div');
            overlay.classList.add('crt-overlay');
            document.body.appendChild(overlay);
        }
    }
    
    // Animate hero elements after preloader
    const animateHeroElements = () => {
        const heroText = document.querySelector('.hero-text h1');
        const heroParagraph = document.querySelector('.hero-text p');
        const heroButtons = document.querySelector('.hero-buttons');
        const heroImage = document.querySelector('.hero-image');
        
        if (heroText) {
            // Set initial state
            heroText.style.opacity = '1';
            heroText.style.transform = 'translateY(0)';
            heroText.style.transition = 'opacity 1s ease, transform 1s ease';
        }
        
        if (heroParagraph) {
            // Animate paragraph immediately
            heroParagraph.style.opacity = '1';
            heroParagraph.style.transform = 'translateY(0)';
            heroParagraph.style.transition = 'opacity 1s ease, transform 1s ease';
        }
        
        if (heroButtons) {
            // Animate buttons immediately
            heroButtons.style.opacity = '1';
            heroButtons.style.transform = 'translateY(0)';
            heroButtons.style.transition = 'opacity 1s ease, transform 1s ease';
        }
        
        if (heroImage) {
            // Animate image immediately
            heroImage.style.opacity = '1';
            heroImage.style.transform = 'translateX(0)';
            heroImage.style.transition = 'opacity 1s ease, transform 1s ease';
        }
        
        // Start the typing effect immediately
        startTypingEffect();
    };
    
    // Text typing effect for hero heading
    function startTypingEffect() {
        const heroHeading = document.querySelector('.hero-text h1');
        
        if (heroHeading) {
            // Store original text and HTML elements
            const originalHTML = heroHeading.innerHTML;
            // Create a temporary span to extract just the text content
            const tempSpan = document.createElement('span');
            tempSpan.innerHTML = originalHTML;
            const plainText = "SWITCHIPEDEGAMES";
            
            // Clear the heading for the typing effect
            heroHeading.innerHTML = '';
            
            // Start typing immediately
            let i = 0;
            const typeEffect = setInterval(() => {
                if (i < plainText.length) {
                    // Check if we've reached the point to add the span
                    if (i === 10) {
                        // Add the first part without span
                        heroHeading.innerHTML = "SWITCHIPEDE<span>GAMES</span>".substring(0, i);
                    } else if (i > 10) {
                        // Keep the span intact
                        heroHeading.innerHTML = "SWITCHIPEDE<span>GAMES</span>".substring(0, i + 12);
                    } else {
                        // Just add the next character
                        heroHeading.innerHTML += plainText.charAt(i);
                    }
                    i++;
                } else {
                    clearInterval(typeEffect);
                    
                    // Make sure the final HTML is correct
                    heroHeading.innerHTML = "SWITCHIPEDE<span>GAMES</span>";
                    
                    // Add cursor blinking effect after typing
                    const cursor = document.createElement('span');
                    cursor.classList.add('typing-cursor');
                    cursor.textContent = '|';
                    cursor.style.animation = 'blink 1s infinite';
                    heroHeading.appendChild(cursor);
                    
                    // Remove cursor after 3 seconds
                    setTimeout(() => {
                        cursor.remove();
                    }, 3000);
                }
            }, 50);
        }
    }

    // Mobile Menu Toggle with animation
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
            
            // Animate menu items
            if (navLinks.classList.contains('active')) {
                const menuItems = navLinks.querySelectorAll('li');
                menuItems.forEach((item, index) => {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                    item.style.transitionDelay = `${index * 0.1}s`;
                    
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 50);
                });
            }
        });
    }

    // Navbar scroll effect with enhanced transitions
    const header = document.querySelector('header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            header.classList.add('scrolled');
            
            // Hide navbar on scroll down, show on scroll up
            if (scrollTop > lastScrollTop && scrollTop > 300) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });

    // Smooth scrolling for navigation links with enhanced scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                if (menuToggle) menuToggle.classList.remove('active');
            }
            
            const targetID = this.getAttribute('href');
            const target = document.querySelector(targetID);
            
            if (target) {
                // Calculate offset based on header height
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = targetPosition - headerHeight - 20;
                
                // Smooth scroll with easing
                const startPosition = window.pageYOffset;
                const distance = offsetPosition - startPosition;
                const duration = 1000;
                let start = null;
                
                // Easing function
                const easeInOutQuad = (t, b, c, d) => {
                    t /= d/2;
                    if (t < 1) return c/2*t*t + b;
                    t--;
                    return -c/2 * (t*(t-2) - 1) + b;
                };
                
                // Animation loop
                const animation = currentTime => {
                    if (start === null) start = currentTime;
                    const timeElapsed = currentTime - start;
                    const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
                    window.scrollTo(0, run);
                    if (timeElapsed < duration) requestAnimationFrame(animation);
                };
                
                requestAnimationFrame(animation);
            }
        });
    });

    // Active navigation link based on scroll position with highlight effects
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        const offset = 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - offset;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
                
                // Add highlight effect on active link
                const highlightEffect = document.createElement('span');
                highlightEffect.classList.add('nav-highlight');
                
                // Remove any existing highlights
                const existingHighlights = document.querySelectorAll('.nav-highlight');
                existingHighlights.forEach(highlight => highlight.remove());
                
                // Add new highlight
                item.appendChild(highlightEffect);
                
                // Animate the highlight
                setTimeout(() => {
                    highlightEffect.style.opacity = '1';
                    highlightEffect.style.transform = 'scale(1.5)';
                    setTimeout(() => {
                        highlightEffect.style.opacity = '0';
                        setTimeout(() => {
                            highlightEffect.remove();
                        }, 300);
                    }, 300);
                }, 50);
            }
        });
    });

    // Back to top button with smooth animation
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', e => {
            e.preventDefault();
            
            // Smooth scroll to top with easing
            const scrollToTop = () => {
                const c = document.documentElement.scrollTop || document.body.scrollTop;
                if (c > 0) {
                    window.requestAnimationFrame(scrollToTop);
                    window.scrollTo(0, c - c / 10);
                }
            };
            
            scrollToTop();
        });
    }

    // Particle effect for hero section with enhanced particles
    const particleContainer = document.querySelector('.particle-container');
    
    if (particleContainer) {
        createParticles();
    }

    function createParticles() {
        const particleCount = 40; // Reduced from 70 for better performance
        const particleTypes = ['circle', 'square', 'triangle'];
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Randomly choose particle type
            const type = particleTypes[Math.floor(Math.random() * particleTypes.length)];
            particle.classList.add(`particle-${type}`);
            
            // Random position
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            
            // Random size (slightly reduced)
            const size = Math.random() * 5 + 2;
            
            // Random opacity
            const opacity = Math.random() * 0.5 + 0.2;
            
            // Random animation duration and delay
            const duration = Math.random() * 15 + 10; // Reduced max duration
            const delay = Math.random() * 5;
            
            // Use Galaga color palette instead of random hues
            const colors = [
                'var(--galaga-blue)',
                'var(--galaga-red)',
                'var(--galaga-yellow)',
                'var(--galaga-green)',
                'var(--galaga-purple)'
            ];
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            // Set styles (using proper CSS vars for colors)
            let styles = `
                position: absolute;
                top: ${posY}%;
                left: ${posX}%;
                width: ${size}px;
                height: ${size}px;
                background-color: ${color};
                pointer-events: none;
                animation: floatParticle ${duration}s linear infinite;
                animation-delay: -${delay}s;
                box-shadow: 0 0 ${size * 1.5}px ${color.replace(')', ', 0.5)')};
                z-index: 1;
                will-change: transform; /* Performance optimization */
            `;
            
            // Different styles based on particle type
            if (type === 'square') {
                styles += `border-radius: 2px; transform: rotate(${Math.random() * 360}deg);`;
            } else if (type === 'triangle') {
                particle.style.width = '0';
                particle.style.height = '0';
                particle.style.backgroundColor = 'transparent';
                particle.style.borderLeft = `${size}px solid transparent`;
                particle.style.borderRight = `${size}px solid transparent`;
                particle.style.borderBottom = `${size * 1.5}px solid ${color}`;
                styles += `border-radius: 0; transform: rotate(${Math.random() * 360}deg);`;
            } else {
                styles += `border-radius: 50%;`;
            }
            
            particle.style.cssText = styles;
            particleContainer.appendChild(particle);
        }
    }

    // Video thumbnail hover effect with enhanced visuals
    const videoCards = document.querySelectorAll('.video-card');
    
    videoCards.forEach(card => {
        const thumbnail = card.querySelector('.video-thumbnail');
        
        if (thumbnail) {
            // Create video thumbnail visuals
            const thumbImages = [
                'assets/images/games/dbz-thumb.jpg',
                'assets/images/games/sf6-thumb.jpg',
                'assets/images/games/tmnt-thumb.jpg',
                'assets/images/games/re4-thumb.jpg'
            ];
            
            // Randomly select a thumbnail image
            const randomThumb = thumbImages[Math.floor(Math.random() * thumbImages.length)];
            
            // Create gradient overlay
            const gradientColors = [
                'rgba(255, 165, 0, 0.3)',
                'rgba(0, 255, 255, 0.3)',
                'rgba(255, 0, 100, 0.3)',
                'rgba(100, 200, 255, 0.3)'
            ];
            
            const randomColor = gradientColors[Math.floor(Math.random() * gradientColors.length)];
            
            // Apply background image and gradient
            thumbnail.style.backgroundImage = `
                linear-gradient(135deg, ${randomColor} 0%, rgba(0, 0, 0, 0.8) 100%),
                url('${randomThumb}')
            `;
            thumbnail.style.backgroundSize = 'cover';
            thumbnail.style.backgroundPosition = 'center';
            
            // Create glitch effect on hover
            thumbnail.addEventListener('mouseenter', () => {
                // Create glitch elements
                for (let i = 1; i <= 2; i++) {
                    const glitchElement = document.createElement('div');
                    glitchElement.classList.add(`glitch-effect-${i}`);
                    glitchElement.style.cssText = `
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background-image: inherit;
                        background-size: cover;
                        background-position: center;
                        opacity: 0.8;
                        z-index: 1;
                    `;
                    
                    // Add animation
                    if (i === 1) {
                        glitchElement.style.animation = 'glitch-1 0.5s infinite';
                        glitchElement.style.clipPath = 'polygon(0 0, 100% 0, 100% 33%, 0 33%)';
                    } else {
                        glitchElement.style.animation = 'glitch-2 0.7s infinite';
                        glitchElement.style.clipPath = 'polygon(0 67%, 100% 67%, 100% 100%, 0 100%)';
                    }
                    
                    thumbnail.appendChild(glitchElement);
                }
            });
            
            thumbnail.addEventListener('mouseleave', () => {
                // Remove glitch elements
                const glitchElements = thumbnail.querySelectorAll('[class^="glitch-effect"]');
                glitchElements.forEach(el => el.remove());
            });
            
            // Add click event to play button
            const playButton = card.querySelector('.play-button');
            if (playButton) {
                playButton.addEventListener('click', () => {
                    // Add click effect
                    playButton.classList.add('clicked');
                    setTimeout(() => {
                        playButton.classList.remove('clicked');
                        
                        // You would typically open a YouTube video
                        // For now, we'll just show an alert
                        alert('Video would play here - connect to YouTube API for full functionality');
                    }, 300);
                });
            }
        }
    });

    // Form validation with enhanced feedback
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        // Add input animation
        const formInputs = contactForm.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            // Focus effect
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
                
                // Label animation
                const label = input.parentElement.querySelector('label');
                if (label) {
                    label.style.color = 'var(--primary-color)';
                    label.style.transform = 'translateY(-5px)';
                }
            });
            
            // Blur effect
            input.addEventListener('blur', () => {
                input.parentElement.classList.remove('focused');
                
                // Reset label if input is empty
                const label = input.parentElement.querySelector('label');
                if (label && !input.value) {
                    label.style.color = '';
                    label.style.transform = '';
                }
            });
            
            // Check if input already has value (e.g., on page reload)
            if (input.value) {
                input.parentElement.classList.add('has-value');
                
                const label = input.parentElement.querySelector('label');
                if (label) {
                    label.style.color = 'var(--primary-color)';
                    label.style.transform = 'translateY(-5px)';
                }
            }
        });
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            let valid = true;
            const inputs = contactForm.querySelectorAll('input, textarea');
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    valid = false;
                    input.classList.add('error');
                    
                    // Shake animation for error
                    input.style.animation = 'shake 0.5s ease';
                    setTimeout(() => {
                        input.style.animation = '';
                    }, 500);
                    
                    // Error message
                    let errorMsg = input.parentElement.querySelector('.error-message');
                    if (!errorMsg) {
                        errorMsg = document.createElement('span');
                        errorMsg.classList.add('error-message');
                        errorMsg.style.color = '#ff3a3a';
                        errorMsg.style.fontSize = '12px';
                        errorMsg.style.marginTop = '5px';
                        errorMsg.style.display = 'block';
                        input.parentElement.appendChild(errorMsg);
                    }
                    errorMsg.textContent = `Please enter your ${input.getAttribute('name')}`;
                } else {
                    input.classList.remove('error');
                    
                    // Remove error message if exists
                    const errorMsg = input.parentElement.querySelector('.error-message');
                    if (errorMsg) {
                        errorMsg.remove();
                    }
                }
            });
            
            if (valid) {
                // Success animation
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                if (submitBtn) {
                    submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
                    submitBtn.style.backgroundColor = '#28a745';
                    
                    // Reset form with animation
                    setTimeout(() => {
                        inputs.forEach(input => {
                            input.style.opacity = '0';
                            input.style.transform = 'translateY(-10px)';
                        });
                        
                        setTimeout(() => {
                            contactForm.reset();
                            
                            inputs.forEach(input => {
                                input.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                                input.style.opacity = '1';
                                input.style.transform = 'translateY(0)';
                                
                                // Reset label
                                const label = input.parentElement.querySelector('label');
                                if (label) {
                                    label.style.color = '';
                                    label.style.transform = '';
                                }
                                
                                input.parentElement.classList.remove('has-value');
                            });
                            
                            // Reset button
                            submitBtn.innerHTML = 'Send Message';
                            submitBtn.style.backgroundColor = '';
                        }, 500);
                    }, 1500);
                }
            }
        });
    }

    // Parallax effect for sections
    const parallaxElements = document.querySelectorAll('.hero, .about-section, .games-section, .contact-section');
    
    window.addEventListener('scroll', () => {
        parallaxElements.forEach(element => {
            const scrollPosition = window.pageYOffset;
            const elementPosition = element.offsetTop;
            const distance = scrollPosition - elementPosition;
            
            if (Math.abs(distance) < window.innerHeight) {
                const parallaxBg = element.querySelector(':before');
                if (parallaxBg) {
                    parallaxBg.style.transform = `translateY(${distance * 0.1}px)`;
                }
            }
        });
    });

    // Animation on scroll with enhanced effects
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    };
    
    // Add animation classes to elements with varied animations
    const elementsToAnimate = [
        {selector: '.video-card', animation: 'fadeInUp'},
        {selector: '.game-card', animation: 'fadeInUp'},
        {selector: '.about-image', animation: 'fadeInLeft'},
        {selector: '.about-text', animation: 'fadeInRight'},
        {selector: '.stats .stat-item', animation: 'zoomIn'},
        {selector: '.info-item', animation: 'fadeInUp'},
        {selector: '.subscribe-card', animation: 'fadeIn'},
        {selector: '.section-header', animation: 'fadeInDown'}
    ];
    
    elementsToAnimate.forEach(({selector, animation}) => {
        document.querySelectorAll(selector).forEach((element, index) => {
            element.classList.add('animate-on-scroll');
            element.classList.add(animation);
            element.style.animationDelay = `${index * 0.1}s`;
        });
    });
    
    // Run animation check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on load
    animateOnScroll();

    // Add CSS for animation
    const style = document.createElement('style');
    style.textContent = `
        .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .animate-on-scroll.animated {
            opacity: 1;
            transform: translateY(0);
        }
        
        .fadeInUp {
            transform: translateY(30px);
        }
        
        .fadeInDown {
            transform: translateY(-30px);
        }
        
        .fadeInLeft {
            transform: translateX(-50px);
        }
        
        .fadeInRight {
            transform: translateX(50px);
        }
        
        .zoomIn {
            transform: scale(0.8);
        }
        
        .fadeIn {
            opacity: 0;
        }
        
        .animate-on-scroll.fadeInUp.animated,
        .animate-on-scroll.fadeInDown.animated {
            transform: translateY(0);
        }
        
        .animate-on-scroll.fadeInLeft.animated,
        .animate-on-scroll.fadeInRight.animated {
            transform: translateX(0);
        }
        
        .animate-on-scroll.zoomIn.animated {
            transform: scale(1);
        }
        
        .particle {
            position: absolute;
            animation-name: floatParticle;
        }
        
        @keyframes floatParticle {
            0% { transform: translateY(0) translateX(0); }
            25% { transform: translateY(-20px) translateX(10px); }
            50% { transform: translateY(0) translateX(20px); }
            75% { transform: translateY(20px) translateX(10px); }
            100% { transform: translateY(0) translateX(0); }
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        @keyframes glitch-1 {
            0%, 100% { transform: translate(0); }
            20% { transform: translate(-5px, 5px); }
            40% { transform: translate(-5px, -5px); }
            60% { transform: translate(5px, 5px); }
            80% { transform: translate(5px, -5px); }
        }
        
        @keyframes glitch-2 {
            0%, 100% { transform: translate(0); }
            25% { transform: translate(5px, 5px); }
            50% { transform: translate(-5px, -5px); }
            75% { transform: translate(-5px, 5px); }
        }
        
        .nav-highlight {
            position: absolute;
            width: 10px;
            height: 10px;
            background-color: var(--primary-color);
            border-radius: 50%;
            top: 50%;
            left: -20px;
            transform: translateY(-50%) scale(0);
            opacity: 0;
            transition: all 0.3s ease;
        }
        
        .play-button.clicked {
            transform: translate(-50%, -50%) scale(0.8) !important;
        }
    `;
    
    document.head.appendChild(style);

    // Create Galaga-inspired game elements
    createGalagaElements();
    
    // Add glitch effect to headings
    const headings = document.querySelectorAll('h1, h2, h3');
    headings.forEach(heading => {
        // Randomly apply glitch effect to some headings
        if (Math.random() > 0.7) {
            heading.classList.add('glitch');
        }
    });
    
    // Listen for scroll to fire laser
    let lastLaserTime = 0;
    window.addEventListener('scroll', () => {
        const now = Date.now();
        // Limit laser firing to once every 2 seconds
        if (now - lastLaserTime > 2000) {
            fireLaser();
            lastLaserTime = now;
        }
    });
});

// Create all Galaga-themed elements
function createGalagaElements() {
    // Create starfield background
    createStarfield();
    
    // Create enemy ships
    createEnemyShips();
    
    // Add requestAnimationFrame optimization to reduce performance impact
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                animateGalagaElements();
                ticking = false;
            });
            ticking = true;
        }
    });
}

// Create starfield background
function createStarfield() {
    const starfield = document.createElement('div');
    starfield.classList.add('starfield');
    document.body.appendChild(starfield);
    
    // Create 70 stars (reduced from 100) with random properties
    for (let i = 0; i < 70; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random star size between 1-3px
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Random position
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        
        // Random twinkle animation duration
        const duration = Math.random() * 3 + 2;
        star.style.setProperty('--duration', `${duration}s`);
        
        starfield.appendChild(star);
    }
}

// Create enemy ships that float around
function createEnemyShips() {
    const enemyContainer = document.createElement('div');
    enemyContainer.classList.add('enemy-container');
    document.body.appendChild(enemyContainer);
    
    // Create 5 enemy ships
    for (let i = 0; i < 5; i++) {
        const ship = document.createElement('div');
        ship.classList.add('enemy-ship');
        
        // Add random enemy type (changes color via CSS)
        const type = Math.floor(Math.random() * 3);
        ship.classList.add(`enemy-type-${type}`);
        
        // Random position
        ship.style.left = `${Math.random() * 90 + 5}vw`;
        
        // Random animation duration
        const duration = Math.random() * 10 + 15;
        ship.style.setProperty('--duration', `${duration}s`);
        
        enemyContainer.appendChild(ship);
    }
}

// Create laser beam effect
function fireLaser() {
    const laser = document.createElement('div');
    laser.classList.add('laser-beam');
    
    // Random position
    laser.style.left = `${Math.random() * 90 + 5}vw`;
    
    document.body.appendChild(laser);
    
    // Remove laser after animation completes
    setTimeout(() => {
        document.body.removeChild(laser);
    }, 1000);
}

// Create an enhanced starfield for the Galaga theme
function createEnhancedStarfield() {
    // Make sure we don't create duplicate starfields
    if (document.querySelector('.enhanced-starfield')) return;
    
    const starfield = document.createElement('div');
    starfield.classList.add('enhanced-starfield');
    document.body.appendChild(starfield);
    
    // Create different types of stars
    const starCount = {
        small: 100,
        medium: 50,
        large: 20,
        shooting: 5
    };
    
    // Create small stars (background layer)
    for (let i = 0; i < starCount.small; i++) {
        createStar('small', 1, 2, 0.7, starfield);
    }
    
    // Create medium stars (middle layer)
    for (let i = 0; i < starCount.medium; i++) {
        createStar('medium', 2, 3, 0.8, starfield);
    }
    
    // Create large stars (foreground layer)
    for (let i = 0; i < starCount.large; i++) {
        createStar('large', 3, 4, 0.9, starfield);
    }
    
    // Create occasional shooting stars
    setInterval(() => {
        createShootingStar(starfield);
    }, 8000);
    
    // Create occasional enemy ships passing by
    setInterval(() => {
        if (Math.random() > 0.7) { // 30% chance
            createRandomEnemyShip();
        }
    }, 10000);
}

// Create a single star with specific properties
function createStar(type, minSize, maxSize, opacity, parent) {
    const star = document.createElement('div');
    star.classList.add('star', `star-${type}`);
    
    // Generate random properties
    const size = Math.random() * (maxSize - minSize) + minSize;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = Math.random() * 3 + 2;
    
    // Apply styles
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${posX}vw`;
    star.style.top = `${posY}vh`;
    star.style.opacity = opacity;
    star.style.animationDelay = `${delay}s`;
    star.style.animationDuration = `${duration}s`;
    
    // Add to starfield
    parent.appendChild(star);
    
    return star;
}

// Create a shooting star effect
function createShootingStar(parent) {
    const star = document.createElement('div');
    star.classList.add('shooting-star');
    
    // Random position (always starts from top area of the screen)
    const startX = Math.random() * 100;
    const startY = Math.random() * 30;
    
    // Random angle trajectory (always downward)
    const angle = Math.random() * 60 - 30; // -30 to 30 degrees
    
    // Apply styles
    star.style.left = `${startX}vw`;
    star.style.top = `${startY}vh`;
    star.style.transform = `rotate(${angle}deg)`;
    
    // Add to starfield
    parent.appendChild(star);
    
    // Remove after animation completes
    setTimeout(() => {
        if (parent.contains(star)) {
            parent.removeChild(star);
        }
    }, 1500);
}

// Create random enemy ship that floats across the screen
function createRandomEnemyShip() {
    const ship = document.createElement('div');
    ship.classList.add('enemy-ship', 'random-enemy');
    
    // Random type of enemy
    const type = Math.floor(Math.random() * 3);
    ship.classList.add(`enemy-type-${type}`);
    
    // Random position (sides of the screen)
    const isLeft = Math.random() > 0.5;
    const startX = isLeft ? -50 : window.innerWidth + 50;
    const startY = Math.random() * (window.innerHeight - 100) + 50;
    
    // Random size for variety
    const size = Math.random() * 15 + 15; // 15-30px
    
    // Apply styles
    ship.style.position = 'fixed';
    ship.style.width = `${size}px`;
    ship.style.height = `${size}px`;
    ship.style.left = `${startX}px`;
    ship.style.top = `${startY}px`;
    ship.style.zIndex = '0';
    
    // Set animation direction based on start position
    const endX = isLeft ? window.innerWidth + 50 : -50;
    const duration = Math.random() * 10 + 15; // 15-25 seconds
    
    // Animate the ship
    ship.animate([
        { left: `${startX}px`, transform: 'rotate(0deg)' },
        { left: `${endX}px`, transform: 'rotate(360deg)' }
    ], {
        duration: duration * 1000,
        easing: 'linear'
    });
    
    // Add to document
    document.body.appendChild(ship);
    
    // Remove after animation completes
    setTimeout(() => {
        if (document.body.contains(ship)) {
            document.body.removeChild(ship);
        }
    }, duration * 1000);
}

// Initialize the enhanced starfield when the page loads
document.addEventListener('DOMContentLoaded', () => {
    createEnhancedStarfield();
    
    // Fire occasional lasers for visual effect
    setInterval(() => {
        if (Math.random() > 0.7) { // 30% chance
            fireLaser();
        }
    }, 5000);
}); 