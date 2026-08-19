export const mockStudyMaterials = [
  {
    id: "thermodynamics",
    chapter: "Thermodynamics",
    subject: "Physics",
    summary: "Thermodynamics is the branch of physics dealing with heat, work, temperature, and energy transformations in physical systems. It governs how mechanical energy converts to thermal energy and sets fundamental limits on engine efficiency.",
    keyConcepts: [
      "Zeroth Law: Defines thermal equilibrium and forms the basis of temperature measurement.",
      "First Law: Energy conservation principle — heat supplied equals increase in internal energy plus work done.",
      "Second Law: Entropy of an isolated system always increases; heat cannot spontaneously flow from cold to hot.",
      "Third Law: As temperature approaches absolute zero (0 K), the entropy of a pure crystalline substance approaches zero.",
      "Carnot Engine: Idealized thermodynamic cycle establishing maximum possible thermal efficiency."
    ],
    formulas: [
      {
        name: "First Law of Thermodynamics",
        formula: "ΔU = Q - W",
        note: "ΔU is change in internal energy, Q is heat added, and W is work done by the system."
      },
      {
        name: "Ideal Gas Law",
        formula: "P · V = n · R · T",
        note: "P: Pressure, V: Volume, n: Moles, R: Universal Gas Constant (8.314 J/mol·K), T: Absolute Temp."
      },
      {
        name: "Work Done in Isobaric Process",
        formula: "W = P · ΔV",
        note: "Work performed when volume expands at constant pressure P."
      },
      {
        name: "Carnot Engine Efficiency",
        formula: "η = 1 - (T_C / T_H)",
        note: "Efficiency η depends only on absolute temperatures of cold (T_C) and hot (T_H) reservoirs."
      },
      {
        name: "Entropy Change",
        formula: "ΔS = ∫ (dQ_rev / T)",
        note: "Measure of molecular disorder; dQ_rev is heat transferred reversibly at absolute temperature T."
      }
    ]
  },
  {
    id: "trigonometry",
    chapter: "Trigonometry",
    subject: "Maths",
    summary: "Trigonometry studies the relationships between side lengths and angles of triangles. It is essential across calculus, wave mechanics, signal processing, vector projections, and geometric modeling.",
    keyConcepts: [
      "Pythagorean Trigonometric Identities: Fundamental relations connecting sine, cosine, and tangent.",
      "Sine and Cosine Rules: Solve non-right triangles using side ratios and opposite angles.",
      "Compound Angle Formulas: Express trigonometric values for sums and differences of angles.",
      "Double and Half Angle Identities: Simplify powers and complex trigonometric expressions.",
      "Periodic Properties: Trigonometric functions repeat predictably over 2π or π intervals."
    ],
    formulas: [
      {
        name: "Pythagorean Identity",
        formula: "sin²(θ) + cos²(θ) = 1",
        note: "Holds true for all real angles θ; forms the core unit circle relation."
      },
      {
        name: "Sine Rule",
        formula: "a / sin(A) = b / sin(B) = c / sin(C) = 2R",
        note: "Relates side lengths a, b, c to sines of opposite angles A, B, C and circumradius R."
      },
      {
        name: "Cosine Rule",
        formula: "c² = a² + b² - 2ab · cos(C)",
        note: "Generalization of Pythagorean theorem for any triangle with angle C between sides a and b."
      },
      {
        name: "Double Angle Sine Identity",
        formula: "sin(2θ) = 2 · sin(θ) · cos(θ)",
        note: "Decomposes double-angle sine into single-angle product."
      },
      {
        name: "Tangent Addition Formula",
        formula: "tan(A + B) = (tan A + tan B) / (1 - tan A · tan B)",
        note: "Calculates tangent of angle sum when tan A · tan B ≠ 1."
      }
    ]
  },
  {
    id: "chemical-bonding",
    chapter: "Chemical Bonding",
    subject: "Chemistry",
    summary: "Chemical Bonding explores how atoms combine to form stable molecules through ionic, covalent, and metallic bonds. It explains molecular geometries, hybridization, polarity, and intermolecular forces.",
    keyConcepts: [
      "Octet Rule & Lewis Structures: Atoms share or transfer valence electrons to achieve noble gas configuration.",
      "VSEPR Theory: Valence Shell Electron Pair Repulsion predicts 3D spatial geometry of molecules.",
      "Hybridization: Mixing of atomic orbitals (sp, sp², sp³) to form equivalent bonding orbitals.",
      "Molecular Orbital (MO) Theory: Linear combination of atomic orbitals forming bonding and antibonding orbitals.",
      "Intermolecular Forces: Hydrogen bonding, dipole-dipole, and London dispersion forces determine physical properties."
    ],
    formulas: [
      {
        name: "Formal Charge Formula",
        formula: "FC = V - N - (B / 2)",
        note: "V: Valence e-, N: Non-bonding e-, B: Bonding e-. Determines most stable Lewis structure."
      },
      {
        name: "Bond Order (MO Theory)",
        formula: "Bond Order = (N_b - N_a) / 2",
        note: "N_b: Electrons in bonding orbitals, N_a: Electrons in antibonding orbitals."
      },
      {
        name: "Dipole Moment",
        formula: "μ = Q · d",
        note: "Measure of bond polarity; Q is partial charge magnitude and d is separation distance."
      },
      {
        name: "Lattice Energy (Born-Landé)",
        formula: "U_0 = (A · N_A · z⁺ · z⁻ · e²) / (4πε₀ · r₀) · (1 - 1/n)",
        note: "Quantifies electrostatic stabilization energy holding ionic crystal lattice together."
      }
    ]
  },
  {
    id: "calculus",
    chapter: "Differential Calculus",
    subject: "Maths",
    summary: "Differential calculus focuses on the concept of rates of change, tangents to curves, and optimization. Derivatives provide exact mathematical toolsets for physics, engineering, and machine learning gradients.",
    keyConcepts: [
      "Limits & Continuity: Foundation of derivatives examining behavior near points.",
      "Power, Product, and Quotient Rules: Standard mechanical differentiation algorithms.",
      "Chain Rule: Differentiation of composite functions f(g(x)).",
      "Mean Value Theorem: Guarantees a point where instantaneous rate equals average rate.",
      "Maxima and Minima: First and second derivative tests for optimization."
    ],
    formulas: [
      {
        name: "Definition of Derivative",
        formula: "f'(x) = lim_{h→0} [f(x+h) - f(x)] / h",
        note: "Instantaneous rate of change as secant line interval h approaches zero."
      },
      {
        name: "Power Rule",
        formula: "d/dx (xⁿ) = n · xⁿ⁻¹",
        note: "Derivative of power function for any real exponent n."
      },
      {
        name: "Product Rule",
        formula: "d/dx (u · v) = u' · v + u · v'",
        note: "Differentiates product of two differentiable functions u(x) and v(x)."
      },
      {
        name: "Chain Rule",
        formula: "d/dx [f(g(x))] = f'(g(x)) · g'(x)",
        note: "Differentiates composite function by multiplying outer and inner derivatives."
      }
    ]
  },
  {
    id: "electrostatics",
    chapter: "Electrostatics & Capacitance",
    subject: "Physics",
    summary: "Electrostatics studies static electric charges, electric fields, potential energy, and charge storage in capacitors. It forms the backbone of electromagnetism and circuit physics.",
    keyConcepts: [
      "Coulomb's Law: Electrostatic force between point charges is proportional to charge product and inverse-square of distance.",
      "Electric Field & Gauss's Law: Electric flux through a closed surface equals enclosed charge divided by permittivity.",
      "Electric Potential: Scalar field representing electrostatic potential energy per unit charge.",
      "Capacitance: Ability of a conductor system to store electric charge per unit potential difference."
    ],
    formulas: [
      {
        name: "Coulomb's Law",
        formula: "F = (1 / 4πε₀) · (|q₁ · q₂| / r²)",
        note: "Force F between charges q₁ and q₂ separated by distance r in vacuum."
      },
      {
        name: "Gauss's Law",
        formula: "∮ E · dA = Q_enclosed / ε₀",
        note: "Total electric flux through closed surface equals net enclosed charge divided by ε₀."
      },
      {
        name: "Parallel Plate Capacitance",
        formula: "C = (ε₀ · A) / d",
        note: "Capacitance C for plate area A separated by distance d in vacuum/air."
      },
      {
        name: "Energy Stored in Capacitor",
        formula: "U = ½ · C · V² = ½ · (Q² / C)",
        note: "Electrostatic potential energy stored in charged capacitor with voltage V."
      }
    ]
  },
  {
    id: "organic-reactions",
    chapter: "Organic Reactions & Mechanisms",
    subject: "Chemistry",
    summary: "Organic chemistry mechanisms trace electron flow in reactions. Understanding nucleophilic substitutions, eliminations, electrophilic additions, and resonance stability is crucial for chemical synthesis.",
    keyConcepts: [
      "SN1 vs SN2 Mechanisms: Unimolecular vs bimolecular nucleophilic substitution pathways.",
      "E1 vs E2 Eliminations: Formation of alkenes via carbocation intermediate or concerted base abstraction.",
      "Electrophilic Aromatic Substitution (EAS): Nitration, halogenation, and Friedel-Crafts reactions on benzene.",
      "Carbocation Rearrangements: 1,2-hydride and alkyl shifts to achieve higher carbocation stability."
    ],
    formulas: [
      {
        name: "SN2 Rate Law",
        formula: "Rate = k · [Substrate] · [Nucleophile]",
        note: "Bimolecular rate law depends on concentrations of both substrate and strong nucleophile."
      },
      {
        name: "SN1 Rate Law",
        formula: "Rate = k · [Substrate]",
        note: "Unimolecular rate law depends solely on rate-determining carbocation formation step."
      },
      {
        name: "Arrhenius Rate Equation",
        formula: "k = A · e^(-Ea / R·T)",
        note: "Relates reaction rate constant k to activation energy Ea and temperature T."
      }
    ]
  }
];

export const sampleChapters = [
  { chapter: "Thermodynamics", subject: "Physics" },
  { chapter: "Trigonometry", subject: "Maths" },
  { chapter: "Chemical Bonding", subject: "Chemistry" },
  { chapter: "Differential Calculus", subject: "Maths" },
  { chapter: "Electrostatics & Capacitance", subject: "Physics" },
  { chapter: "Organic Reactions & Mechanisms", subject: "Chemistry" },
];

/**
 * Simulates fetching study material for a given chapter and subject filter.
 * Returns a promise with simulated AI generation delay.
 */
export function fetchStudyMaterial(chapterQuery, subjectFilter = "All") {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!chapterQuery || !chapterQuery.trim()) {
        resolve(null);
        return;
      }

      const queryLower = chapterQuery.toLowerCase().trim();

      // Find exact or partial match
      const matched = mockStudyMaterials.find((m) => {
        const matchesSubject =
          subjectFilter === "All" ||
          m.subject.toLowerCase() === subjectFilter.toLowerCase();
        const matchesName =
          m.chapter.toLowerCase().includes(queryLower) ||
          m.id.toLowerCase().includes(queryLower);
        return matchesSubject && matchesName;
      });

      if (matched) {
        resolve(matched);
      } else {
        // Fallback: Generate dynamic structured study material for any searched term
        const subject =
          subjectFilter !== "All"
            ? subjectFilter
            : queryLower.includes("math") || queryLower.includes("calc") || queryLower.includes("algebra") || queryLower.includes("geo")
            ? "Maths"
            : queryLower.includes("chem") || queryLower.includes("acid") || queryLower.includes("atom") || queryLower.includes("mol")
            ? "Chemistry"
            : "Physics";

        resolve({
          id: `custom-${Date.now()}`,
          chapter: chapterQuery.trim(),
          subject: subject,
          summary: `AI Generated Overview for ${chapterQuery}: A comprehensive breakdown covering core theoretical principles, key analytical frameworks, and practical problem-solving methodologies for ${chapterQuery} in ${subject}.`,
          keyConcepts: [
            `Fundamental Definitions & Axioms of ${chapterQuery}`,
            `Analytical Frameworks & Standard Assumptions`,
            `Key Derivations & Mathematical Formulations`,
            `Real-world Applications & System Interactions`
          ],
          formulas: [
            {
              name: `Primary Relation of ${chapterQuery}`,
              formula: `Ψ(${chapterQuery.slice(0, 3)}) = α · X + β · Y`,
              note: `Governs the fundamental state transformation for ${chapterQuery}.`
            },
            {
              name: `Conservation Theorem`,
              formula: `∑ (E_in) = ∑ (E_out) + ΔE_stored`,
              note: `Energy & charge equilibrium balance relation.`
            },
            {
              name: `Rate / Gradient Function`,
              formula: `d/dt [Φ] = λ · ∇²(Φ)`,
              note: `Describes spatial/temporal change in ${chapterQuery} systems.`
            }
          ]
        });
      }
    }, 700); // 700ms simulated AI retrieval delay
  });
}
