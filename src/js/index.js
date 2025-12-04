 // Inicializa o mapa centrado em Umuarama - PR e adiciona dois marcadores com endereços aleatórios
        document.addEventListener('DOMContentLoaded', function() {
            // Coordenadas aproximadas de Umuarama
            const center = [-23.7570, -53.3200];
            const map = L.map('map').setView(center, 14);

            // Camada de tiles (OpenStreetMap)
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            }).addTo(map);
            // Dois estabelecimentos de exemplo em Umuarama - PR
            const exemplos = [
                { nome: 'Padaria Central', endereco: 'R. Aleatória, 123 - Centro, Umuarama - PR', coords: [-23.7535, -53.3190] },
                { nome: 'Oficina do João', endereco: 'Av. Exemplo, 456 - Jardim Novo, Umuarama - PR', coords: [-23.7600, -53.3250] }
            ];

            // Função para adicionar marcador e manter lista de bounds
            const bounds = [];
            function adicionarMarcador(item, isSaved) {
                const marker = L.marker(item.coords).addTo(map);
                const popup = '<strong>' + (item.nome || 'Sem nome') + '</strong>' + (item.endereco ? ('<br>' + item.endereco) : '') + (item.categoria ? ('<br><em>' + item.categoria + '</em>') : '') + (isSaved ? '<br><small>Registrado</small>' : '');
                marker.bindPopup(popup);
                bounds.push(item.coords);
            }

            // Adiciona exemplos
            exemplos.forEach(e => adicionarMarcador(e, false));

            // Carrega comercios salvos no localStorage
            try {
                const salvos = JSON.parse(localStorage.getItem('comercios') || '[]');
                if (Array.isArray(salvos)) {
                    salvos.forEach(c => {
                        if (c && c.coords && c.coords.length === 2) adicionarMarcador({ nome: c.nome, endereco: c.endereco, categoria: c.categoria, coords: c.coords }, true);
                    });
                }
            } catch (err) {
                console.warn('Erro ao ler comercios do localStorage', err);
            }

            // Ajusta view para incluir todos os marcadores, se houver
            if (bounds.length) {
                const latlngs = bounds.map(b => L.latLng(b[0], b[1]));
                const bb = L.latLngBounds(latlngs);
                map.fitBounds(bb.pad(0.25));
            }
        });