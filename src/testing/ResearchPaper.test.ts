import { ResearchPaper } from '../domain/ResearchPaper';
import { Industry } from '../domain/Industry';

function runTests() {
    let failed = 0;
    const testIndustry = new Industry("ind-1", "Technology", "Tech applications");

    try {
        new ResearchPaper("1", "Valid Paper", 2025, testIndustry);
    } catch (e) {
        failed++;
    }

    try {
        new ResearchPaper("2", "Invalid Year", 1800, testIndustry);
        failed++;
    } catch (e) {
    }

    if (failed === 0) {
        console.log("All invariant tests passed.");
    }
}

runTests();
