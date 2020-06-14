## Computation of Microbial Ecosystems in Time and Space.

This was a research project I did as a grad student between early 2010, and finally published in 2014 (a few years after I graduated, sadly, but I got a few posters out of it. And a dissertation, I suppose).

The goal of the project was to apply flux balance analysis and other contraint-based microbial metabolism modeling tools to produce an ecosystem. Most of the tools and algorithms at the time focused on modeling a single microbe. Microbial interaction modeling was either done as a "bag of enzymes" (so, squashing together all models at once into a single compartment) or solving several models at once in separate compartments, that share a common extracellular space "compartment."

We expanded on this by adding a dynamical component, based on dynamic FBA (Mahadevan et. al., c2008).

So what's that mean?

I built an arbitrary-sized grid where each square on the grid was a complete dFBA model - it had concentrations of all modeled extracellualar metabolites (media) and a quantity of biomass. It then worked stepwise, where each step was a brief moment of dynamic FBA where biomass in each cell would consume/produce media metabolites. The next step was a smoothing one - everything in each grid space would diffuse into nearby grid spaces following the usual diffusion equations with diffusion coefficients differing for each metabolite and biomass species.

Short version = we simulated growing microbes on an abitrary field and watched them compete and cooperate with each other.