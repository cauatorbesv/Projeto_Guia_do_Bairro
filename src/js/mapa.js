document.addEventListener('DOMContentLoaded', function() {
            const defaultCenter = [-23.7570, -53.3200];
            const map = L.map('map-registro').setView(defaultCenter, 14);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; OpenStreetMap'
            }).addTo(map);

            let marker;
            function placeMarker(latlng) {
                if (marker) marker.setLatLng(latlng);
                else marker = L.marker(latlng).addTo(map);
                document.getElementById('lat').value = latlng.lat.toFixed(6);
                document.getElementById('lng').value = latlng.lng.toFixed(6);
            }

            map.on('click', function(e) { placeMarker(e.latlng); });

            // Ao submeter o formulário, salva no localStorage e redireciona para o mapa
            const form = document.getElementById('form-cadastro');
            form.addEventListener('submit', function(ev) {
                ev.preventDefault();
                // Se o validador já marcou erros, não prossegue
                if (form.querySelectorAll && form.querySelectorAll('.erro').length > 0) {
                    // foca no primeiro erro
                    const primeiro = form.querySelector('.erro');
                    if (primeiro && primeiro.focus) primeiro.focus();
                    return;
                }
                
                if (form.querySelectorAll('.erro').length > 0) {
                    return;
                }

                const nome = document.getElementById('nome-comercio').value.trim();
                const categoria = document.getElementById('categoria').value;
                const endereco = document.getElementById('endereco').value.trim();
                const contato = document.getElementById('contato').value.trim();
                const horario = document.getElementById('horario').value.trim();
                const descricao = document.getElementById('descricao').value.trim();
                const lat = parseFloat(document.getElementById('lat').value);
                const lng = parseFloat(document.getElementById('lng').value);

                

                const novo = { nome, categoria, endereco, contato, horario, descricao, coords: [lat, lng], criadoEm: new Date().toISOString() };
                const chave = 'comercios';
                const atuais = JSON.parse(localStorage.getItem(chave) || '[]');
                atuais.push(novo);
                localStorage.setItem(chave, JSON.stringify(atuais));

                // Vai para a página inicial para ver o marcador
                window.location.href = 'index.html';
            });
        });