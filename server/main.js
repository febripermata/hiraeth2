import { Meteor } from "meteor/meteor";
import bcrypt from "bcryptjs";

import { StressRoom } from "../imports/api/stressRoom";
import { Survey } from "../imports/api/survey";
import { Quotes } from "../imports/api/quotes";
import { Admin } from "../imports/api/admin";

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (Quotes.find().count() === 0) {
    inserQuote({
      quote:
        "Please believe there is still time for you to be all that you want to be, there is still time",
      author: "Unknown",
    });

    inserQuote({
      quote: "Perfection is found in accepting your imperfections",
      author: "Unknown",
    });

    inserQuote({
      quote: "If the universe didn't need you, you wouldn't be here",
      author: "Unknown",
    });

    inserQuote({
      quote: "Sometimes you just have to rest, the world can wait",
      author: "Unknown",
    });

    inserQuote({
      quote:
        "You're valuable. You're capable. You're inspiring. You're beautiful. You're enough",
      author: "Unknown",
    });

    inserQuote({
      quote: "You're Amazing! Trust me, everything will be fine",
      author: "Unknown",
    });
  }

  if (Survey.find().count() === 0) {
    Survey.insert({
      name: "Febi",
      surename: "feb",
      email: "febi@gmail.com",
      createdAt: new Date(),
    });
  }

  if (StressRoom.find().count() === 0) {
    StressRoom.insert({ message: "I am happ", createdAt: new Date() });
  }

  if (Admin.find().count() === 0) {
    const password = "admin123";
    const hashPassword = bcrypt.hashSync(password, 10);

    Admin.insert({
      email: "admin@gmail.com",
      username: "admin",
      password: hashPassword,
    })
  }
});
