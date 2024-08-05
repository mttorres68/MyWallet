import { UserStorage } from '../contexts/auth';
import { Routes } from '../routes';

export default function App() {
  return (
  
      <UserStorage> 
          <Routes/>
      </UserStorage>

  );
}
