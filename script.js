// PulseFlow Analytics Client Interactivity
function setTimeframe(tf) {
  document.querySelectorAll('.time-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  const mrrEl = document.getElementById('kpiMrr');
  if (tf === '7D') {
    mrrEl.textContent = '$28,400';
  } else if (tf === '30D') {
    mrrEl.textContent = '$118,450';
  } else if (tf === '90D') {
    mrrEl.textContent = '$342,100';
  } else if (tf === '12M') {
    mrrEl.textContent = '$1,420,800';
  }
}

function filterTable(tier) {
  document.querySelectorAll('.table-tab-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  const rows = document.querySelectorAll('#customerTable tbody tr');
  rows.forEach(row => {
    if (tier === 'all') {
      row.style.display = '';
    } else if (tier === 'enterprise') {
      row.style.display = row.getAttribute('data-tier') === 'enterprise' ? '' : 'none';
    } else if (tier === 'expansion') {
      row.style.display = (row.getAttribute('data-tier') === 'enterprise' || row.getAttribute('data-tier') === 'growth') ? '' : 'none';
    }
  });
}

// Live Search
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase();
      const rows = document.querySelectorAll('#customerTable tbody tr');
      rows.forEach(row => {
        const text = row.innerText.toLowerCase();
        row.style.display = text.includes(q) ? '' : 'none';
      });
    });
  }

  // Global ⌘K focus
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      searchInput.focus();
    }
  });
});
