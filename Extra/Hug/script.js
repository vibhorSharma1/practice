document.addEventListener("DOMContentLoaded", () => {
    // 3D Silhouette Animation
    const silhouette = document.querySelector(".couple-silhouette")
    let rotationY = 0
  
    function rotateSilhouette() {
      rotationY += 0.3
      silhouette.style.transform = `rotateY(${rotationY}deg)`
      requestAnimationFrame(rotateSilhouette)
    }
  
    rotateSilhouette()
  
    // Particles Effect - Hearts and Stars
    const particlesContainer = document.getElementById("particles")
    const particlesCount = 40
  
    for (let i = 0; i < particlesCount; i++) {
      createParticle()
    }
  
    function createParticle() {
      const particle = document.createElement("div")
      particle.style.position = "absolute"
  
      // Randomly choose between heart and star shapes
      const isHeart = Math.random() > 0.5
  
      if (isHeart) {
        particle.style.width = Math.random() * 15 + 10 + "px"
        particle.style.height = particle.style.width
        particle.style.background = `rgba(255, ${Math.floor(Math.random() * 200) + 50}, ${Math.floor(Math.random() * 150) + 100}, ${Math.random() * 0.5 + 0.3})`
        particle.style.borderRadius = "50% 50% 50% 0"
        particle.style.transform = "rotate(45deg)"
  
        // Create heart shape with pseudo-elements
        particle.style.position = "relative"
        particle.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.5)"
  
        // Add pseudo-elements for heart shape
        const style = document.createElement("style")
        const uniqueId = "heart-" + Math.floor(Math.random() * 1000000)
        particle.classList.add(uniqueId)
  
        style.innerHTML = `
                  .${uniqueId}:before,
                  .${uniqueId}:after {
                      content: "";
                      position: absolute;
                      width: 100%;
                      height: 100%;
                      background: inherit;
                      border-radius: 50%;
                  }
                  
                  .${uniqueId}:before {
                      top: -50%;
                      left: 0;
                  }
                  
                  .${uniqueId}:after {
                      top: 0;
                      left: -50%;
                  }
              `
  
        document.head.appendChild(style)
      } else {
        // Create star shape
        const size = Math.random() * 10 + 5
        particle.style.width = size + "px"
        particle.style.height = size + "px"
        particle.style.backgroundColor = "rgba(255, 255, 255, 0.8)"
  
        // Star shape using clip-path
        particle.style.clipPath =
          "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
      }
  
      // Random starting position
      const startX = Math.random() * window.innerWidth
      const startY = Math.random() * window.innerHeight
  
      particle.style.left = startX + "px"
      particle.style.top = startY + "px"
  
      // Animation properties
      const duration = Math.random() * 15 + 10
      const delay = Math.random() * 5
  
      particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`
  
      // Create keyframes for this specific particle
      const keyframes = `
              @keyframes float {
                  0% {
                      transform: translate(0, 0) rotate(${isHeart ? "45deg" : "0deg"});
                      opacity: ${Math.random() * 0.5 + 0.3};
                  }
                  25% {
                      transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(${isHeart ? "45deg" : "0deg"}) scale(${Math.random() * 0.5 + 0.8});
                  }
                  50% {
                      transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(${isHeart ? "45deg" : "0deg"}) scale(${Math.random() * 0.5 + 0.8});
                      opacity: ${Math.random() * 0.5 + 0.5};
                  }
                  75% {
                      transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(${isHeart ? "45deg" : "0deg"}) scale(${Math.random() * 0.5 + 0.8});
                  }
                  100% {
                      transform: translate(0, 0) rotate(${isHeart ? "45deg" : "0deg"});
                      opacity: ${Math.random() * 0.5 + 0.3};
                  }
              }
          `
  
      // Add keyframes to document
      const style = document.createElement("style")
      style.innerHTML = keyframes
      document.head.appendChild(style)
  
      particlesContainer.appendChild(particle)
    }
  
    // Popup functionality
    const hugBtn = document.getElementById("hugBtn")
    const popup = document.getElementById("popup")
    const closeBtn = document.getElementById("closeBtn")
  
    hugBtn.addEventListener("click", () => {
      popup.classList.add("active")
  
      // Create heart burst effect
      createHeartBurst()
    })
  
    closeBtn.addEventListener("click", () => {
      popup.classList.remove("active")
    })
  
    function createHeartBurst() {
      for (let i = 0; i < 30; i++) {
        const heart = document.createElement("div")
        heart.classList.add("heart-particle")
        heart.style.position = "absolute"
        heart.style.width = Math.random() * 20 + 10 + "px"
        heart.style.height = heart.style.width
        heart.style.background = `rgba(255, ${Math.floor(Math.random() * 100) + 100}, ${Math.floor(Math.random() * 100) + 100}, 1)`
        heart.style.borderRadius = "50% 50% 50% 0"
        heart.style.transform = "rotate(45deg)"
        heart.style.zIndex = "11"
  
        // Add pseudo-elements for heart shape
        const style = document.createElement("style")
        const uniqueId = "burst-heart-" + Math.floor(Math.random() * 1000000)
        heart.classList.add(uniqueId)
  
        style.innerHTML = `
                  .${uniqueId}:before,
                  .${uniqueId}:after {
                      content: "";
                      position: absolute;
                      width: 100%;
                      height: 100%;
                      background: inherit;
                      border-radius: 50%;
                  }
                  
                  .${uniqueId}:before {
                      top: -50%;
                      left: 0;
                  }
                  
                  .${uniqueId}:after {
                      top: 0;
                      left: -50%;
                  }
              `
  
        document.head.appendChild(style)
  
        // Position at button location
        const rect = hugBtn.getBoundingClientRect()
        const startX = rect.left + rect.width / 2
        const startY = rect.top + rect.height / 2
  
        heart.style.left = startX + "px"
        heart.style.top = startY + "px"
  
        // Random direction
        const angle = Math.random() * Math.PI * 2
        const distance = Math.random() * 200 + 100
        const endX = startX + Math.cos(angle) * distance
        const endY = startY + Math.sin(angle) * distance
  
        // Animation
        heart.animate(
          [
            { transform: "scale(0) rotate(45deg)", left: startX + "px", top: startY + "px", opacity: 1 },
            { transform: "scale(1) rotate(45deg)", left: endX + "px", top: endY + "px", opacity: 0 },
          ],
          {
            duration: Math.random() * 1000 + 1000,
            easing: "cubic-bezier(0.1, 0.8, 0.2, 1)",
          },
        )
  
        document.body.appendChild(heart)
  
        // Remove after animation
        setTimeout(() => {
          heart.remove()
        }, 2000)
      }
    }
  
    // Interactive elements - parallax effect
    document.addEventListener("mousemove", (e) => {
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight
  
      // Subtle parallax effect on silhouette
      const hugContainer = document.querySelector(".hug-container")
      hugContainer.style.transform = `translate(${(x - 0.5) * 20}px, ${(y - 0.5) * 20}px) rotate(${(x - 0.5) * 10}deg)`
  
      // Subtle effect on message
      const message = document.querySelector(".message")
      message.style.transform = `translate(${(x - 0.5) * -10}px, ${(y - 0.5) * -10}px)`
    })
  
    // Add heartbeat effect to the hugging figures in popup
    function animateHuggingFigures() {
      const leftFigure = document.querySelector(".hug-figure.left")
      const rightFigure = document.querySelector(".hug-figure.right")
  
      if (leftFigure && rightFigure) {
        setInterval(() => {
          leftFigure.style.transform = "rotate(30deg) scale(1.1)"
          rightFigure.style.transform = "rotate(-30deg) scale(1.1)"
  
          setTimeout(() => {
            leftFigure.style.transform = "rotate(0deg) scale(1)"
            rightFigure.style.transform = "rotate(0deg) scale(1)"
          }, 500)
        }, 1500)
      }
    }
  
    animateHuggingFigures()
  })
  
  