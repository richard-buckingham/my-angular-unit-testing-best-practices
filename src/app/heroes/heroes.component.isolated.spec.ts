import { HeroesComponent } from "./heroes.component";
import { Hero } from "../hero";
import { of } from "rxjs/internal/observable/of";

describe("HeroesComponent - isolated tests", () => {
  let component: HeroesComponent;
  let HEROES: Hero[];
  let mockHeroService;

  beforeEach(() => {
    HEROES = [
      { id: 1, name: "SpiderDude", strength: 8 },
      { id: 2, name: "Wonderful Woman", strength: 24 },
      { id: 3, name: "SuperDude", strength: 55 }
    ];

    // create the mock hero service using jasmine.
    // create an object the has three methods by passing in an array of method names
    mockHeroService = jasmine.createSpyObj([
      "getHeroes",
      "addHero",
      "deleteHero"
    ]);

    component = new HeroesComponent(mockHeroService);
  });

  describe("delete", () => {
    it("should remove the indicated hero from the heroes list", () => {
      // arrange
      // return an observable from the delete method
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROES;

      // act
      component.delete(HEROES[2]);

      // assert
      expect(component.heroes.length).toBe(2);
    });

    it("should call deleteHero with the correct parameter", () => {
      // arrange
      // return an observable from the delete method
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROES;

      // act
      component.delete(HEROES[2]);

      // assert
      expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
    });
  });
});
