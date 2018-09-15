import { ProfesseurModule } from './professeur.module';

describe('ProfesseurModule', () => {
  let professeurModule: ProfesseurModule;

  beforeEach(() => {
    professeurModule = new ProfesseurModule();
  });

  it('should create an instance', () => {
    expect(professeurModule).toBeTruthy();
  });
});
