import React from "react";
import Link from "next/link";
import { Suspense } from "react";

// styles
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/MealsGrid";

// db
import { getMeals } from "@/lib/meals";

export const metadata = {
  title: "All Meals - NextLevel Food",
  description: "Browse the delicious meals shared by our community.",
};

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

const MealsPage = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
