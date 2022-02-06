import { configure, makeAutoObservable } from 'mobx';
import axios from 'axios';
import { axiosError } from './common.js';

configure({
  enforceActions: 'never',
  useProxies: 'never'
});

export default class MembersStore {
  constructor() {
    makeAutoObservable(this);
  }

  members = [];
  member = {
    name: '',
    age: ''
  };

  membersCreate() {
    axios.post('http://192.168.152.106:3100/api/v1/members', this.member).then((response) => {
      console.log('Done membersCreate', response);
      this.membersRead();
    }).catch((error) => {
      axiosError(error);
    });
  }
  membersRead() {
    this.members = [{
      name: '홍길동',
      age: 20
    }, {
      name: '춘향이',
      age: 16
    }];
    console.log('Done membersRead', this.members);
  }
  membersDelete(index) {
    this.members.splice(index, 1);
    console.log('Done membersDelete', this.members);
  }
  membersUdate(index, member) {
    this.members[index] = member;
    console.log('Done membersUpdate', this.members);
  }
}

export const membersStore = new MembersStore();
