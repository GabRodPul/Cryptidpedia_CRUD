module.exports = (sequelize, Sequelize) => {
    const CryptidEntry = sequelize.define("cryptid_entry", {
        title: {
            type: Sequelize.STRING(50)
        },
        category: {
            type: Sequelize.ENUM(
                "UMA",
                "OVNI",
                "PARANORMAL",
                "OCCULT",
                "MEME_HAZARD",
                "OTHERS"
                )
        },
        description: {
            type: Sequelize.TEXT
        },
        filename: {
            type: Sequelize.STRING(255)
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        }
    });

    return CryptidEntry;
  }