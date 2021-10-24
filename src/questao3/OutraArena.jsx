import React from 'react'
import Hero from '../questao1/Hero'
import Enemy from '../questao1/Enemy'

export default function OutraArena(props){

    return (
        <div>
        <Hero name = "Saitama" image = "/images/hero.png"/>
            <Enemy name = "Boros" image = "/images/enemy.png"/>
        </div>
      )
    }

