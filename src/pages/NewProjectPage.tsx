import React from 'react'
import ClippyQuestion from '../components/ClippyQuestion'

export default function NewProjectPage() {
  return <>
    <h1>Neues Projekt</h1>
    <ClippyQuestion question="Hast du eine Idee oder bist du schon mitten in der Umsetzung" possibleAnswers={["Idee", "Umsetzung"]}></ClippyQuestion>
  </>
}
