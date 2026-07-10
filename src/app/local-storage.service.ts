import { Injectable } from '@angular/core';
import { QuestionTableData } from './questionTableData';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  private allBoardNamesKey = "beta"
  private playableBoardsKey = "key for the main board"

  // The following four functions below are basic local storage functions
  // Set item in local storage
  setItem(key: string, value: any): void {
    try {
      const jsonValue = JSON.stringify(value);
      localStorage.setItem(key, jsonValue);
    } catch (error) {
      console.error('Error saving to local storage', error);
    }
  }

  // Get item from local storage
  getItem<T>(key: string): T | null {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error('Error reading from local storage', error);
      return null;
    }
  }

  // Remove item from local storage
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  // Clear all local storage
  clear(): void {
    localStorage.clear();
  }


  //The following two functions are for managing the array of saved board names
  getBoardNames(): string[]{
    let allBoardNames = JSON.parse(this.getItem(this.allBoardNamesKey) as string)
    return allBoardNames["names"]
  }

  setBoardNames(array: string[]): void{
    this.setItem(this.allBoardNamesKey, JSON.stringify({"names": array}))
  }

  //The following three functions are for managing boards set as playable
  getPlayableBoardNames(): string[]{
    return this.getItem(this.playableBoardsKey) as string[]
  }

  setPlayableBoards(finishedBoardNames: string[]): void{
    this.setItem(this.playableBoardsKey, finishedBoardNames)
  }

  getPlayableBoardData(){
    let playableBoardNameArray = this.getItem(this.playableBoardsKey) as string[]
    let playableBoardDataArray = [];
    playableBoardDataArray.push(this.getItem<{data: QuestionTableData[]}>(playableBoardNameArray[0]))
    playableBoardDataArray.push(this.getItem<{data: QuestionTableData[]}>(playableBoardNameArray[1]))
    return playableBoardDataArray
  }

}
