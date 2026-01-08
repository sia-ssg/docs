// Copy to clipboard functionality for code blocks
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    // Add copy buttons to all code blocks
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach(function(codeBlock) {
      const pre = codeBlock.parentElement;
      
      // Skip if already has a copy button
      if (pre.querySelector('.code-copy-btn')) return;
      
      // Create copy button
      const copyBtn = document.createElement('button');
      copyBtn.className = 'code-copy-btn';
      copyBtn.setAttribute('aria-label', 'Copy code');
      copyBtn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
        <span class="copy-text">Copy</span>
      `;
      
      // Wrap pre in a container if needed
      if (!pre.parentElement.classList.contains('code-example')) {
        const wrapper = document.createElement('div');
        wrapper.className = 'code-example';
        const header = document.createElement('div');
        header.className = 'code-example-header';
        header.appendChild(copyBtn);
        pre.parentNode.insertBefore(wrapper, pre);
        wrapper.appendChild(header);
        wrapper.appendChild(pre);
      } else {
        const header = pre.parentElement.querySelector('.code-example-header');
        if (header) {
          header.appendChild(copyBtn);
        }
      }
      
      // Copy functionality
      copyBtn.addEventListener('click', function() {
        const text = codeBlock.textContent;
        
        navigator.clipboard.writeText(text).then(function() {
          const copyText = copyBtn.querySelector('.copy-text');
          const originalText = copyText.textContent;
          copyText.textContent = 'Copied!';
          
          setTimeout(function() {
            copyText.textContent = originalText;
          }, 2000);
        }).catch(function(err) {
          console.error('Failed to copy:', err);
        });
      });
    });
  });
})();

