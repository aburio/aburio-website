---
title: Automated replenishment
org: Frichti
period: 2021 - 2023
role: Lead Product Manager
phase: scaled
order: 1
summary: I rebuilt the algorithm that orders stock for every warehouse, and the tool around it, so the supply team could trust it.
figure: 98% of orders automated
tags: ["Scale", "Algorithm", "Supply chain"]
stack: ["Go", "Node.js", "React.js", "BigQuery", "Apache Airflow", "PostgreSQL", "RabbitMQ", "AWS"]
cover:
  alt: Frichti replenishment web app showing a replenishment order and its details
caseStudy: true
---

## The problem

An algorithm ordered stock for every Frichti warehouse, and nobody trusted it. It was unstable, the supply team could not see why it ordered what it ordered, and engineers were called in three times a week.

## What I did

I led the rebuild of the algorithm for stability and predictability. Then I redesigned the tool around it, so the supply and operations teams could read each decision and act on it instead of working around a black box.

## The result

98% of replenishment orders are automated. On-call requests went from 3 a week to under 1 a quarter, and questions about order content dropped tenfold.
