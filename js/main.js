
    // 1. Definisikan Audio di paling atas
    const audio = document.getElementById('bgm');
            const btnMusic = document.getElementById('btnMusic');

            // 2. Ambil Nama Tamu
            const urlParams = new URLSearchParams(window.location.search);
            const nama = urlParams.get('nama');
            if (nama) document.getElementById('guestName').innerText = nama;

            // 3. Opening Animation
            const openingTl = gsap.timeline();
            openingTl
                .to("#bg", { opacity: 1, duration: 1 })
                .fromTo("#patrick", { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8 })
                .fromTo("#sponge", { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8 }, "<")
                .fromTo(".jelly", { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.2 })
                .fromTo("#slime", { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6 }, "-=0.3")
                .fromTo("#titleMain", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
                .fromTo("#titleGuest", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
                .fromTo("#btnOpen", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4 });

                function playOpeningExit() {
                        const exitTl = gsap.timeline({
                            onComplete: () => {
                                goTo('event');
                                showNav();

                                audio.volume = 0.6;
                                audio.play().catch(() => { });
                            }
                        });

                        exitTl
                            .to("#patrick", { x: -200, opacity: 0, duration: 0.4 })
                            .to("#sponge", { x: 200, opacity: 0, duration: 0.4 }, "<")
                            .to(".jelly", { y: -80, opacity: 0, duration: 0.3, stagger: 0.1 })
                            .to("#slime", { scale: 0.6, opacity: 0, duration: 0.3 })
                            .to("#titleMain", { y: 40, opacity: 0, duration: 0.25 })
                            .to("#titleGuest", { y: 40, opacity: 0, duration: 0.25 }, "<")
                            .to("#btnOpen", { scale: 0.8, opacity: 0, duration: 0.2 });
                    }


            // 4. Fungsi Navigasi
            function showNav() {
                const nav = document.getElementById('bottomNav');
                nav.classList.remove('opacity-0', 'pointer-events-none');
                nav.classList.add('opacity-100');
            }

            function goTo(pageId) {
                const pages = document.querySelectorAll('.page');
                pages.forEach(p => p.classList.add('hidden'));

                const target = document.getElementById(pageId);
                target.classList.remove('hidden');

                // Animasi elemen dengan class .animate
                gsap.set(`#${pageId} .animate`, { y: 40, opacity: 0 });
                gsap.to(`#${pageId} .animate`, {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.12,
                    ease: "power2.out"
                });

                  // Floating Button Logic
                const float = document.getElementById('floatingButtons');
                if (pageId === 'event' || pageId === 'rundown') {
                    float.classList.remove('opacity-0', 'pointer-events-none');
                    float.classList.add('opacity-100');
                } else {
                    float.classList.add('opacity-0', 'pointer-events-none');
                    float.classList.remove('opacity-100');
                }

                // Update Nav State
                document.getElementById('nav-opening')?.classList.toggle('opacity-50', pageId !== 'opening');
                document.getElementById('nav-event')?.classList.toggle('opacity-50', pageId !== 'event');
                document.getElementById('nav-rundown')?.classList.toggle('opacity-50', pageId !== 'rundown');
            }

            // Transisi OUT Event → Rundown
            function playEventExit(nextPage) {
                    const exitTl = gsap.timeline({
                        onComplete: () => goTo(nextPage)
                    });

                    exitTl.to("#event .animate", {
                        y: -40,
                        opacity: 0,
                        duration: 0.3,
                        stagger: 0.05
                    });
                }


            // 5. Event Listener Tombol Buka
            // document.getElementById('btnOpen').onclick = () => {
            //     goTo('event');
            //     showNav();

            //     // PLAY AUDIO - Ini kunci utamanya
            //     if (audio) {
            //         audio.volume = 0.6;
            //         audio.play().catch(e => console.error("Gagal play audio:", e));
            //     }
            // };

            document.getElementById('btnOpen').onclick = () => {
                    playOpeningExit();
            };




            // 6. Kontrol Musik (Mute/Unmute)
            btnMusic?.addEventListener('click', () => {
                if (audio.paused) {
                    audio.play();
                    btnMusic.innerText = '🔊';
                } else {
                    audio.pause();
                    btnMusic.innerText = '🔇';
                }
            });