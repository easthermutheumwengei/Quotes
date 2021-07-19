export class Quotes {
  showDescription: boolean;
  constructor(public id: number, public name: string, public description: string, public author: string, publiccompleteDate: Date, public upVote: number, public downVote: number)
  {
    this.showDescriotion = false;
  }

}
