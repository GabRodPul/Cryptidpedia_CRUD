import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CryptidEntryService {

  endPoint = "http://localhost:8080/api/cryptid_entries"

  constructor(private httpClient: HttpClient) { }

  getCryptidEntries() {
    return this.httpClient.get(this.endPoint);
  }

  createCryptidEntry(cryptidEntry, blob) {
    let formData = new FormData();
    formData.append("title", cryptidEntry.title);
    formData.append("category", cryptidEntry.category);
    formData.append("description", cryptidEntry.description);
    formData.append("file", blob);

    return this.httpClient.post(this.endPoint, formData);
  }

  updateCryptidEntry(cryptidEntry, blob) {
    let formData = new FormData();
    formData.append("id", cryptidEntry.id);
    formData.append("title", cryptidEntry.title);
    formData.append("category", cryptidEntry.category);
    formData.append("description", cryptidEntry.description);
    formData.append("file", blob);    

    return this.httpClient.put(this.endPoint + '/' + cryptidEntry.id, formData);
  }

  deleteCryptidEntry(id: number) {
    return this.httpClient.delete(this.endPoint + '/' + id);
  }
}
