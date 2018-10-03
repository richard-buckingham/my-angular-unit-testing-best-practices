import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeroesComponent } from "./heroes.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { HeroService } from "../hero.service";
import { Hero } from "../hero";
import { of } from "rxjs/internal/observable/of";

describe("HeroesComponent shallow tests", () => {
  let fixture: ComponentFixture<HeroesComponent>;
  let HEROES: Hero[];
  let mockHeroService;

  beforeEach(() => {
    // create the mock hero service
    mockHeroService = jasmine.createSpyObj([
      "getHeroes",
      "addHero",
      "deleteHero"
    ]);

    HEROES = [
      { id: 1, name: "SpiderDude", strength: 8 },
      { id: 2, name: "Wonderful Woman", strength: 24 },
      { id: 3, name: "SuperDude", strength: 55 }
    ];

    // create the testbed
    TestBed.configureTestingModule({
      declarations: [HeroesComponent],
      providers: [
        {
          provide: HeroService,
          useValue: mockHeroService
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(HeroesComponent);
  });

  it("should set heroes correct from the service's getHeroes method", () => {
    // arrange
    // return an observable array of heroes from the getHeroes method
    mockHeroService.getHeroes.and.returnValue(of(HEROES));

    // act by firing change detection
    fixture.detectChanges();

    // assert
    expect(fixture.componentInstance.heroes.length).toBe(3);
  });
});
