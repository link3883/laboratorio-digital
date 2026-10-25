
"use strict";

// EXP. 001 — Interacción inicial

const experimentButton = document.querySelector("#experiment-button");
const experimentDescription = document.querySelector("#experiment-description");

let experimentRuns = 0;

function executeExperiment() {
    experimentRuns += 1;

    experimentDescription.textContent =
        `Experimento ejecutado correctamente. Número de ejecución: ${experimentRuns}.`;

    experimentButton.textContent = "Ejecutar de nuevo";
}

experimentButton.addEventListener("click", executeExperiment);
