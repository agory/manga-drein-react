import * as MangaService from "./MangaService";
import { MANGA_LIST } from "../data/manga";

describe("test MangaService fetchManga", () => {
  it("should return null", () => {
    MangaService.fetchManga(null).subscribe(manga => expect(manga).toBeNull);
  });

  it("should return the first manga", () => {
    const manga = MANGA_LIST[0];
    MangaService.fetchManga(manga.id).subscribe(manga2 =>
      expect(manga2).toEqual(manga)
    );
  });

  it("should return the last manga", () => {
    const manga = MANGA_LIST[MANGA_LIST.length - 1];
    MangaService.fetchManga(manga.id).subscribe(manga2 =>
      expect(manga2).toEqual(manga)
    );
  });
});

describe("test MangaService fetchSearchManga", () => {
  it("should return an empty array", () => {
    MangaService.fetchSearchManga(
      "je suis n'importe quoi qsdgsgdcbdgefgfd"
    ).subscribe(list => expect(list).toEqual([]));
  });

  it("should return an all item", () => {
    MangaService.fetchSearchManga("est").subscribe(list =>
      expect(list).toEqual(
        MANGA_LIST.filter(manga => manga.title.includes("est"))
      )
    );
  });
});
