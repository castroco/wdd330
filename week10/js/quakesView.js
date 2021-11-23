 // Quake View handler
 export default class QuakesView {
    renderQuakeList(quakeList, listElement) {
      //build a list of the quakes...include the title and time of each quake then append the list to listElement. You should also add the id of the quake record as a data- property to the li. ie. <li data-id="">
      quakeList.features.forEach(element => {
          const quake = document.createElement('li');
          quake.setAttribute('data-id', element.id);
          quake.innerHTML = `${element.properties.title}
          <p>${new Date(element.properties.time)}</p>`;
          listElement.appendChild(quake);
      });

      listElement.innerHTML = quakeList.features
      .map(quake => {
        return `<li data-id=${quake.id}>${
          quake.properties.title
        } <div>${new Date(quake.properties.time)}</div><button>More Info</button></li>
        `;
      })
      .join('');
    }
    renderQuake(quake, element) {
      const quakeProperties = Object.assign(quake.properties);
      element.parentElement.children[0].classList.add('hidden');
      element.parentElement.parentElement.children[1].classList.add('hidden');
      element.parentElement.children[1].classList.remove('hidden');
    
      element.parentElement.children[1].innerHTML = `<h1>${quakeProperties.title}</h1>
      <div>
          <p>Location: ${quakeProperties.place}</p>
          <p>Size: ${quakeProperties.mag} ${quakeProperties.magType}</p>
          <p>Time: ${new Date(quakeProperties.time)}</p>
          <p>Type: ${quakeProperties.type}</p>
          <p>Maximum intensity: ${quakeProperties.cdi == null ? "None" : quakeProperties.cdi}</p>
          <p>Significance: ${quakeProperties.sig}</p>
          <p>Felt: ${quakeProperties.felt == null ? "No one" : quakeProperties.felt}</p>
          <p>Tsunami: ${quakeProperties.tsunami == 0 ? "No" : "Yes"}</p>
          <p>Gap: ${quakeProperties.gap}</p>
          <p>Horizontal Distance: ${quakeProperties.dmin}&deg</p>
          <p>Seismic Stations: ${quakeProperties.nst}</p>
          <p>Root-Mean-Square(Travel Time): ${quakeProperties.rms} sec</p>
          <p>Updated: ${new Date(quakeProperties.updated)}</p>
          <a class="btn" href="${quakeProperties.url}" ​target="_blank">More Info</a>
      </div><button id="back">Back</button>`;
    }
  }

  