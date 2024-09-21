 // Create the map centered on Kogi State, Nigeria
 var map = L.map('map').setView([7.733333, 6.733333], 8);

 // Add the OpenStreetMap tile layer
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     maxZoom: 18,
 }).addTo(map);

 // Infrastructure data including hospitals, schools, and roads
 var infrastructure = [
     // Hospitals
     {
         "name": "Kogi State General Hospital",
         "type": "hospital",
         "coordinates": [7.55, 6.75],
         "description": "A major healthcare center serving the central area of Kogi State."
     },
     {
         "name": "Kabba General Hospital",
         "type": "hospital",
         "coordinates": [7.82, 6.07],
         "description": "The largest hospital in the Kabba-Bunu region, crucial for healthcare in western Kogi."
     },
     {
         "name": "Ajaokuta Steel Hospital",
         "type": "hospital",
         "coordinates": [7.5537, 6.6586],
         "description": "Serves workers and families in the Ajaokuta steel industry, a vital industrial health facility."
     },
     // Schools
     {
         "name": "Lokoja Primary School",
         "type": "school",
         "coordinates": [7.8, 6.73],
         "description": "A well-established primary school providing foundational education in the state capital."
     },
     {
         "name": "Federal University Lokoja",
         "type": "school",
         "coordinates": [7.7961, 6.7406],
         "description": "One of the major tertiary institutions in Kogi State, contributing to higher education in the region."
     },
     {
         "name": "Kabba Science College",
         "type": "school",
         "coordinates": [7.8352, 6.0745],
         "description": "Focuses on science and technology education for secondary students in Kabba."
     },
     // Roads and Z-Score data from study
     {
         "name": "Lokoja Urban Centre",
         "type": "road",
         "coordinates": [7.7961, 6.7406],
         "zscore": 3.85,
         "description": "Lokoja is the most privileged urban centre in terms of road infrastructure, with a Z-Score of 3.85."
     },
     {
         "name": "Okenne Urban Centre",
         "type": "road",
         "coordinates": [7.5833, 6.2333],
         "zscore": 2.85,
         "description": "Okenne ranks second in road infrastructure, with a Z-Score of 2.85, showing significant improvement in road networks."
     },
     {
         "name": "Ankpa Urban Centre",
         "type": "road",
         "coordinates": [7.3751, 7.6317],
         "zscore": 1.81,
         "description": "Ankpa has a Z-Score of 1.81, reflecting moderate development in road infrastructure."
     },
     {
         "name": "Dekinna Urban Centre",
         "type": "road",
         "coordinates": [7.4816, 7.145],
         "zscore": 0.83,
         "description": "Dekinna ranks fourth in road infrastructure, indicating average conditions with a Z-Score of 0.83."
     },
     {
         "name": "Ajaokuta Urban Centre",
         "type": "road",
         "coordinates": [7.5537, 6.6586],
         "zscore": 0.77,
         "description": "Ajaokuta, home to Nigeria's largest steel plant, has a Z-Score of 0.77. Improved infrastructure is needed for better accessibility."
     },
     {
         "name": "Bassa-Oguma Urban Centre",
         "type": "road",
         "coordinates": [7.0162, 6.7397],
         "zscore": -0.27,
         "description": "Bassa-Oguma has limited road infrastructure with a Z-Score of -0.27, reflecting underdevelopment."
     },
     {
         "name": "Mopa-Amuro Urban Centre",
         "type": "road",
         "coordinates": [8.0377, 5.915],
         "zscore": -0.28,
         "description": "Mopa-Amuro has the lowest Z-Score (-0.28), indicating very poor road conditions that need urgent attention."
     },
     {
         "name": "Kabba-Bunu Urban Centre",
         "type": "road",
         "coordinates": [7.8352, 6.0745],
         "zscore": -0.82,
         "description": "Kabba-Bunu ranks last in road infrastructure, with a Z-Score of -0.82, showing severe inadequacies."
     }
 ];

 // Add markers for each infrastructure point
 infrastructure.forEach(function(point) {
     var marker = L.marker(point.coordinates).addTo(map);

     // Determine the popup content based on the infrastructure type
     var popupContent = '<b>' + point.name + '</b><br>' + 
         (point.type === 'road' ? 
         'Z-Score: ' + point.zscore + '<br>' + point.description : 
         point.description);

     marker.bindPopup(popupContent);
 });

 // Storytelling and Presentation
 var roadOverview = `
     <h3>Infrastructure Challenges and Opportunities in Kogi State</h3>
     <p>Kogi State faces a significant disparity in road infrastructure, with cities like Lokoja and Okenne enjoying better road networks, while urban centers like Mopa-Amuro and Kabba-Bunu lag far behind. These conditions affect not only transportation but also access to essential services such as healthcare and education.</p>
     <h4>Key Insights</h4>
     <ul>
         <li><b>Lokoja:</b> The capital city benefits from the highest Z-Score (3.85) in road infrastructure, reflecting a well-developed transportation network.</li>
         <li><b>Mopa-Amuro and Kabba-Bunu:</b> These regions suffer from poor road conditions, with Z-Scores of -0.28 and -0.82 respectively, showing the need for urgent government intervention.</li>
         <li><b>Healthcare and Education Access:</b> Poor roads hinder access to critical facilities, such as hospitals in Kabba and schools in remote areas like Mopa-Amuro. Improved road infrastructure is essential to ensure that residents can access these services efficiently.</li>
     </ul>
     <p>To address these challenges, the Kogi State government should prioritize road construction and maintenance, particularly in underdeveloped areas, ensuring that all residents have equitable access to essential infrastructure.</p>
 `;
 document.body.insertAdjacentHTML('beforeend', roadOverview);
