import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="WeatherAPI">
      <header className="SearchContainer">
        <input type="text" value="Type in a city name"></input>
        <button type="submit" >FIND WEATHER</button>
      </header>
      <main className="MainApp">
        <div className="pic1">
          <img src="https://placekitten.com/150/150" alt="kitten"></img><p>Hello samer</p><br></br>
          <p>Hello Hasan</p>
        </div>

        <div className="temp24" >
          <div><p>3</p><img src="https://placekitten.com/50/50" alt="kitten"></img><p>8</p></div>

          <div><p>6</p><img src="https://placekitten.com/50/50" alt="kitten"></img><p>9</p></div>

          <div><p>9</p><img src="https://placekitten.com/50/50" alt="kitten"></img><p>14</p></div>

          <div><p>12</p><img src="https://placekitten.com/50/50" alt="kitten"></img><p>17</p></div>

          <div><p>15</p><img src="https://placekitten.com/50/50" alt="kitten"></img><p>18</p></div>

          <div><p>18</p><img src="https://placekitten.com/50/50" alt="kitten"></img><p>16</p></div>

          <div><p>21</p><img src="https://placekitten.com/50/50" alt="kitten"></img><p>13</p></div>
        </div>
      </main>
    </div>
  );
}

export default App;
