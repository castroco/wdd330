


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
                subTopicName.addEventListener('click', () => {
                //    videoContainer.setAttribute('src', video.subtLink)
                //alert("click");
                    let videoPlayer = document.querySelector('iframe')
                    //console.log(videoPlayer.src);
                    videoPlayer.src = `https://www.youtube.com/embed/${video.subtLink}?enablejsapi=1&modestbranding=1&rel=0&showinfo=0&start=10&origin=http%3A%2F%2Flocalhost%3A5500&widgetid=1`;
                });
                subTopicsList.appendChild(subTopicName);
            });
            topicsList.appendChild(subTopicsList);
            container.appendChild(topicsList);

        });
    });
    

}