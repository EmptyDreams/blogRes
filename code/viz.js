String.prototype.replaceAll = function(search, replacement) {
      var target = this;
      return target.split(search).join(replacement);
    };

    let vizObjects = document.querySelectorAll('.graphviz')

    for (let item of vizObjects) {
      let svg = undefined
      try {
        svg = Viz(item.textContent.replaceAll('–', '--'), 'svg')
      } catch(e) {
        svg = `<pre class="error">${e}</pre>`
      }
      item.outerHTML = svg
    }
