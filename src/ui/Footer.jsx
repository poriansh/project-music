import Button from "./Button";
import { AlignJustify, ImageUp, Info, Search } from 'lucide-react';
export default function Footer() {
  return (
    <div className="shadow-[0px_-2px_5px_rgba(0,0,0,0.2)] bg-white relative bottom-0  p-2">
      <div className="container">
        <div className="flex justify-between items-center">
          <Button>
          <AlignJustify size={25} />
          </Button>
          <div>
            <Button varient="search">
            <Search size={25} />
            </Button>
          </div>
          <div className="flex gap-2">
            <Button>
              <Info/>
            </Button>
            <Button>
              <ImageUp />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
