// Scroll active sidebar link into view
(function() {
  function scrollActiveLinkIntoView() {
    const sidebar = document.querySelector('.docs-sidebar');
    const activeLink = sidebar?.querySelector('.nav-item.active');
    
    if (!activeLink || !sidebar) {
      return;
    }
    
    // Get the sidebar's scroll container
    const scrollContainer = sidebar;
    
    // Calculate the position of the active link relative to the sidebar
    const linkRect = activeLink.getBoundingClientRect();
    const sidebarRect = sidebar.getBoundingClientRect();
    
    // Calculate the offset from the top of the sidebar
    const linkOffsetTop = linkRect.top - sidebarRect.top + scrollContainer.scrollTop;
    
    // Get the sidebar header height (sticky header at top)
    const sidebarHeader = sidebar.querySelector('.sidebar-header');
    const headerHeight = sidebarHeader ? sidebarHeader.offsetHeight : 0;
    
    // Calculate the desired scroll position
    // Center the active link in the visible area, accounting for the header
    const scrollPosition = linkOffsetTop - (scrollContainer.clientHeight / 2) + (activeLink.offsetHeight / 2);
    
    // Scroll to the calculated position with smooth behavior
    scrollContainer.scrollTo({
      top: Math.max(0, scrollPosition),
      behavior: 'smooth'
    });
  }
  
  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', scrollActiveLinkIntoView);
  } else {
    // DOM is already loaded
    scrollActiveLinkIntoView();
  }
})();

