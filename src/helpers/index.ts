import type { ITrendingItem } from "../types";

export const secondsToHms: (date: string) => string = (date) => {
  const newDate = Number(date);
  const h = Math.floor(newDate / 3600);
  const m = Math.floor((newDate % 3600) / 60);
  const duration = h === 0 ? `${m}m` : `${h}h ${m}m`;
  return duration;
};

export const sortByDateDesc = (arr: ITrendingItem[]): ITrendingItem[] => {
  return arr.sort((a, b) => {
    const dateA = new Date(a.Date).getTime();
    const dateB = new Date(b.Date).getTime();
    return dateB - dateA;
  });
};

export const sortByLastClicked = (arr: ITrendingItem[]): ITrendingItem[] => {
  const lastClickedId = sessionStorage.getItem("id");
  
  if (!lastClickedId) {
    return sortByDateDesc(arr);
  }

  const lastClickedMovie = arr.find(item => item.Id === lastClickedId);
  const otherMovies = arr.filter(item => item.Id !== lastClickedId);
  
  const sortedOtherMovies = sortByDateDesc(otherMovies);
  
  return lastClickedMovie 
    ? [lastClickedMovie, ...sortedOtherMovies]
    : sortedOtherMovies;
};