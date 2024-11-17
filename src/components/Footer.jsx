import { useState, useEffect } from 'react';

export default function Footer() {
  const [taskComplete, setTaskComplete] = useState(false);

  useEffect(() => {
    // Check if the lineup containers are present and in the expected structure
    const containers = [...document.querySelectorAll('.lineup-container')];

    // Check if the expected groups are correctly displayed in the containers
    const testCondition =
      containers.length === 3 &&
      containers[0].childNodes[1] &&
      containers[1].childNodes[1] &&
      containers[2].childNodes[1] &&
      containers[0].childNodes[1].textContent === 'Gençlik Boyutu' &&
      containers[1].childNodes[1].textContent === 'Yanan Kar Taneleri' &&
      containers[2].childNodes[1].textContent === 'Pusula Kız Kardeşleri';

    // If the condition is met, mark the task as complete
    if (testCondition) {
      setTaskComplete(true);
    }
  }, []);

  // Conditionally render the footer message if the task is complete
  if (taskComplete) {
    return (
      <footer>
        Gerçek bir festival değil. Tüm grup adları sahte gruplar için isim
        üreteci yardımıyla oluşturulmuştur ve sahte olabilirler, ancak
        bazılarının gerçek olması muhtemeldir.
      </footer>
    );
  } else {
    return null;
  }
}
