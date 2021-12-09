export function displayCourse(course, whereToDisplay) {
    let container = document.querySelector(whereToDisplay);
    container.innerHTML = '';

    course.modules.forEach(module => {
        const moduleTitle = document.createElement('h2');
        moduleTitle.innerHTML = module.name;
        container.appendChild(moduleTitle);
        const topicsList = document.createElement('ul');
        module.topics.forEach(topic => {
            const topicTitle = document.createElement('li');
            topicTitle.innerHTML = topic.topicName;
            topicsList.appendChild(topicTitle);
            const subTopicsList = document.createElement('ul');
            topic.subtopicsVideos.forEach(video => {
                const subTopicName = document.createElement('li');
                subTopicName.innerHTML = video.subtName;
                subTopicsList.appendChild(subTopicName);
            });
            topicsList.appendChild(subTopicsList);
            container.appendChild(topicsList);

        });
        //console.log("module.name: ", module.name);
        console.log("module: ", module);
        
        //quake.setAttribute('data-id', element.id);
        //quake.innerHTML = `${element.properties.title}
        //<p>${new Date(element.properties.time)}</p>`;
        //listElement.appendChild(quake);
    });
    /*
    <h2>Algebra</h2>
            <h3>Logarithms</h3>
            <ul>
                Percentage change
                    <ul>
                        <a href="">Percentage ch 1-5</a>
                        <a href="">Percentage ch 2-5</a>
                        <a href="">Percentage ch 3-5</a>
                        <a href="">Percentage ch 4-5</a>
                        <a href="">Percentage ch 5-5</a> 
                    </ul>
                Definition of Percentage
                    <ul>
                        <a href="">Definition of 1-3</a>
                        <a href="">Definition of 2-3</a>
                        <a href="">Definition of 3-3</a>
                    </ul>
                Exercises
                    <ul>
                        <a href="">Exercise 1</a>
                        <a href="">Exercise 2</a>
                        <a href="">Exercise 3</a>
                    </ul>
            </ul>
            <h2>Algebra</h2>
            <ul>
                Percentage change
                    <ul>
                        <a href="">Percentage ch 1-5</a>
                        <a href="">Percentage ch 2-5</a>
                        <a href="">Percentage ch 3-5</a>
                        <a href="">Percentage ch 4-5</a>
                        <a href="">Percentage ch 5-5</a> 
                    </ul>
                Definition of Percentage
                    <ul>
                        <a href="">Definition of 1-3</a>
                        <a href="">Definition of 2-3</a>
                        <a href="">Definition of 3-3</a>
                    </ul>
                Exercises
                    <ul>
                        <a href="">Exercise 1</a>
                        <a href="">Exercise 2</a>
                        <a href="">Exercise 3</a>
                    </ul>
            </ul>
            */
}