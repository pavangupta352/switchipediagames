// Wait for document to load
document.addEventListener('DOMContentLoaded', () => {
    "use strict";
    
    // Preloader with counter
    const preloader = document.getElementById('preloader');
    const loadingProgress = document.querySelector('.loading-progress');
    let loadingCounter = 0;
    
    const updateCounter = () => {
        if (loadingCounter < 100) {
            loadingCounter++;
            if (loadingProgress) {
                loadingProgress.style.width = `${loadingCounter}%`;
            }
            setTimeout(updateCounter, 30);
        } else {
            // Fade out the preloader
            setTimeout(() => {
                if (preloader) {
                    preloader.style.opacity = '0';
                    setTimeout(() => {
                        preloader.style.display = 'none';
                        
                        // Trigger animations when site is loaded
                        animateHeroElements();
                    }, 500);
                }
            }, 500);
        }
    };
    
    updateCounter();
    
    // Animate hero elements after preloader
    const animateHeroElements = () => {
        const heroText = document.querySelector('.hero-text h1');
        const heroParagraph = document.querySelector('.hero-text p');
        const heroButtons = document.querySelector('.hero-buttons');
        const heroImage = document.querySelector('.hero-image');
        
        if (heroText) {
            heroText.style.opacity = '0';
            heroText.style.transform = 'translateY(30px)';
            setTimeout(() => {
                heroText.style.transition = 'opacity 1s ease, transform 1s ease';
                heroText.style.opacity = '1';
                heroText.style.transform = 'translateY(0)';
            }, 100);
        }
        
        if (heroParagraph) {
            heroParagraph.style.opacity = '0';
            heroParagraph.style.transform = 'translateY(30px)';
            setTimeout(() => {
                heroParagraph.style.transition = 'opacity 1s ease, transform 1s ease';
                heroParagraph.style.opacity = '1';
                heroParagraph.style.transform = 'translateY(0)';
            }, 300);
        }
        
        if (heroButtons) {
            heroButtons.style.opacity = '0';
            heroButtons.style.transform = 'translateY(30px)';
            setTimeout(() => {
                heroButtons.style.transition = 'opacity 1s ease, transform 1s ease';
                heroButtons.style.opacity = '1';
                heroButtons.style.transform = 'translateY(0)';
            }, 500);
        }
        
        if (heroImage) {
            heroImage.style.opacity = '0';
            heroImage.style.transform = 'translateX(50px)';
            setTimeout(() => {
                heroImage.style.transition = 'opacity 1s ease, transform 1s ease';
                heroImage.style.opacity = '1';
                heroImage.style.transform = 'translateX(0)';
            }, 700);
        }
    };

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
        const particleCount = 70;
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
            
            // Random size
            const size = Math.random() * 6 + 2;
            
            // Random opacity
            const opacity = Math.random() * 0.6 + 0.2;
            
            // Random animation duration and delay
            const duration = Math.random() * 20 + 10;
            const delay = Math.random() * 5;
            
            // Random color
            const hue = Math.random() * 30 + 30; // Golden hues
            
            // Set styles
            let styles = `
                position: absolute;
                top: ${posY}%;
                left: ${posX}%;
                width: ${size}px;
                height: ${size}px;
                background-color: hsla(${hue}, 100%, 60%, ${opacity});
                pointer-events: none;
                animation: floatParticle ${duration}s linear infinite;
                animation-delay: -${delay}s;
                box-shadow: 0 0 ${size * 2}px hsla(${hue}, 100%, 60%, ${opacity * 0.5});
                z-index: 1;
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
                particle.style.borderBottom = `${size * 1.5}px solid hsla(${hue}, 100%, 60%, ${opacity})`;
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
    
    // Text typing effect for hero heading
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
        
        // Wait for preloader to finish before starting typing
        setTimeout(() => {
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
        }, 3500); // Start after preloader finishes
    }
}); 