const iframe = document.querySelector('iframe');

    function resizeIframe() {
      try {
        const doc = iframe.contentWindow.document;
        // usa o scrollHeight do root (documentElement) para contar todo o conteúdo
        const height = Math.max(
          doc.documentElement.scrollHeight,
          doc.body.scrollHeight
        );
        console.log('height:', height);
        iframe.style.height = height + 'px';
      } catch (e) {
        // se der erro, provavelmente cross-origin
        console.warn('Não foi possível redimensionar (cross-origin?):', e);
      }
    }

    // redimensiona ao carregar e quando a janela muda de tamanho
    iframe.addEventListener('load', () => {
      resizeIframe();

      // opcional: observe mudanças dinâmicas no conteúdo interno
      try {
        const obs = new MutationObserver(resizeIframe);
        obs.observe(iframe.contentWindow.document.documentElement, {
          childList: true,
          subtree: true,
          attributes: true,
        });
      } catch (e) { /* ignore se não puder */ }
    });

    window.addEventListener('resize', resizeIframe);