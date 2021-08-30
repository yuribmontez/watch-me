import { useEffect, useState } from 'react';
import { Button } from './Button';
import { api } from '../services/api';
import { GenreResponseProps } from '../App'

interface SideBarProps {
  selectedGenreId: number;
  setSelected: (id: number) => void
}

export function SideBar({ selectedGenreId, setSelected }: SideBarProps) {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  return(
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => setSelected(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}
