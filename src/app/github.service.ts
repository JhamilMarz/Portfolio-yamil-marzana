import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private readonly url = 'https://api.github.com/users/JhamilMarz/repos';
  constructor(private httpClient: HttpClient) { }

  loadRepos = () => {
    return this.httpClient.get(`${this.url}?type=owner&per_page=100`)
      .pipe(
        map((item:any)=>item.filter((value: any) => !value.fork)),
        //map((item:any)=>item.filter((value: any) => (value.stargazers_count > 5)))
      );
  }
}
