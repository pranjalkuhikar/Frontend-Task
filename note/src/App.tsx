import { CalendarDays, Pencil, Plus, Search, Trash2 } from "lucide-react";

const App = () => {
  return (
    <div className="font-[mona_sans]">
      <div>
        <h1>Note App</h1>
        <p>
          <Plus />
        </p>
      </div>
      <div>
        <div>
          <Search />
          <input type="text" placeholder="Search" />
        </div>
        <div>
          <div>Hello How are you</div>
          <div>
            <div>
              <CalendarDays /> Date
            </div>
            <div>
              <Trash2 />
            </div>
            <div>
              <Pencil />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
