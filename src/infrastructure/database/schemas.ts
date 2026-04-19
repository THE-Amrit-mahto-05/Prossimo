export const UserSchema = {
    tableName: "users",
    primaryKey: "userId",
    attributes: {
        userId: { type: "uuid", unique: true, index: true }, 
        name: { type: "string" },
        email: { type: "string", unique: true, index: true }, 
        createdAt: { type: "date" }
    }
};

export const IndustrySchema = {
    tableName: "industries",
    primaryKey: "industryId",
    attributes: {
        industryId: { type: "uuid", unique: true, index: true },
        industryName: { type: "string", unique: true },
        description: { type: "string" }
    }
};

export const ResearchPaperSchema = {
    tableName: "research_papers",
    primaryKey: "paperId",
    attributes: {
        paperId: { type: "uuid", unique: true, index: true },
        title: { type: "string" },
        year: { type: "number", min: 1900 },
        citations: { type: "number", default: 0 }, 
        fundingScore: { type: "number", min: 0, max: 100 },
        userId: { type: "uuid", ref: "users.userId", index: true },
        industryId: { type: "uuid", ref: "industries.industryId", index: true }
    },
    indexes: [
        { fields: ["industryId", "year"] },
        { fields: ["citations"] }
    ]
};
