import './App.css';
import Button from './Button';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar>
        <Button iconName='fa-brands fa-twitter'/>
        <Button name='Home' iconName='fa-solid fa-house' />
        <Button name='Explore' iconName='fa-solid fa-hashtag'/>
        <Button name='Notifications' iconName='fa-regular fa-bell'/>
        <Button name='Messages' iconName='fa-regular fa-envelope'/>
        <Button name='Lists' iconName='fa-solid fa-list'/>
        <Button name='Bookmarks' iconName='fa-regular fa-bookmark'/>
        <Button name='Profile' iconName='fa-regular fa-user'/>
        <Button name='More' iconName='fa-solid fa-sliders'/>
        <Button name='Tweet'/>
      </Sidebar>
    </div>
  );
}

export default App;
