import { TestBed, ComponentFixture } from "@angular/core/testing";
import { HeroComponent } from "./hero.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("HeroComponent - shallow tests", () => {
  // define the component under test
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(() => {
    // configure the testing module
    TestBed.configureTestingModule({
      declarations: [HeroComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });

    // create the component under test
    fixture = TestBed.createComponent(HeroComponent);
  });

  it("should have the correct hero", () => {
    fixture.componentInstance.hero = {
      id: 1,
      name: "SuperDude",
      strength: 3
    };

    expect(fixture.componentInstance.hero.name).toBe("SuperDude");
  });

  it("should render the hero name in an anchor tag", () => {
    // arrange
    fixture.componentInstance.hero = {
      id: 1,
      name: "SuperDude",
      strength: 3
    };

    // act - run change detection
    fixture.detectChanges();

    // assert
    expect(fixture.nativeElement.querySelector("a").textContent).toContain(
      "SuperDude"
    );
  });
});
