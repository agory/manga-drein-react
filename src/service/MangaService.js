import { MANGA_LIST } from "../data/manga";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";
import "rxjs/add/operator/map";

export function fetchManga(id) {
  const manga = MANGA_LIST.find(manga => manga.id === id);
  return Observable.of(manga);
}

export function fetchSearchManga(title) {
  console.log("fetchSearchManga is call");
  const list = MANGA_LIST.filter(manga => {
    const bool = manga.title.toLowerCase().includes(title.toLowerCase());
    return bool;
  });
  return Observable.of(list);
}
