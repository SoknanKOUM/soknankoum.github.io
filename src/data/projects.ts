export type CodeSnippet = {
  title?: string; 
  language: string; 
  code: string; 
};

export type Project = {
  id: string; // unique, no spaces — used in the URL: /projects/<id>
  index: string; // card number shown on the card, e.g. '01', '02'
  title: string; // project name
  summary: string; // 1 short sentence, shown on the card
  description: string; // 1-2 sentences, shown on the project detail page
  contribution: string; // what you personally did, shown on the detail page
  tags: string[]; // tech used, e.g. ['Python', 'PyTorch']
  image: string; // '/images/projects/your-file.png' or a full https:// URL
  imageAlt: string; // short text description of the image (for accessibility)
  link: string; // live/demo URL, or '#' if there isn't one
  code?: CodeSnippet[]; // optional — one or more code blocks shown on the detail page
};



export const projects: Project[] = [
  {
    id: 'bank-marketing',
    index: '01',
    title: 'Bank Marketing Campaign — Term Deposit Prediction',
    summary:
      "Predicting whether a client subscribes to a term deposit from a bank's phone marketing campaign, using PySpark and KNN classification.",
    description:
      "Analyzed a bank's phone marketing campaign data end-to-end: loaded records from PostgreSQL into PySpark, cleaned unknown values and duration/campaign outliers, engineered features (age, job and education groupings), and explored the data to see who is most likely to deposit. A KNN classifier trained on the cleaned features reached 93% accuracy on the held-out test set.",
    contribution:
      'Team project (4 members) for the Applied Mathematics coursework at Institute of Technology of Cambodia. I worked on the PySpark ETL and preprocessing pipeline (cleaning, outlier removal, feature engineering) and the KNN classification model.',
    tags: ['PySpark', 'Python', 'PostgreSQL', 'Scikit-learn'],
    image: '/images/projects/Bank_Marketing_Compaign/bank-marketing-deposit-by-job.png',
    imageAlt: 'Stacked bar chart of deposit subscription counts by job category',
    link: '#',
    code: [
      {
        title: 'knn_model.py',
        language: 'python',
        code: `from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import classification_report

KNN_model = KNeighborsClassifier(n_neighbors=5, metric='minkowski', p=2)
KNN_model.fit(X_train, y_train)

y_test_pred = KNN_model.predict(X_test)
print(classification_report(y_test, y_test_pred))
# accuracy: 0.93 on the held-out test set`,
      },
    ],
  },
  {
    id: 'telecom-churn',
    index: '02',
    title: 'Telecom Churn Analysis',
    summary:
      'Predicting which telecom customers are likely to cancel their service, comparing six classification models.',
    description:
      "Analyzed a telecom customer dataset (7,043 customers) to understand and predict churn: cleaned and encoded the data, ran an exploratory analysis of churn against contract type, payment method, internet service and demographics, then trained and compared six classifiers — SVM, Random Forest, Logistic Regression, Decision Tree, AdaBoost and Gradient Boosting. Random Forest was the strongest overall, reaching about 80% test accuracy with an ROC-AUC well above the random baseline.",
    contribution:
      'Team project (5 members) for the Programming for Data Science course at Institute of Technology of Cambodia. I worked on the data cleaning/encoding, the exploratory churn analysis, and training and evaluating the classification models.',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Plotly'],
    image: '/images/projects/Telocom_Churn Analysis_Report/telecom-churn-roc.png',
    imageAlt: 'ROC curve for the Random Forest churn classifier',
    link: '#',
    code: [
      {
        title: 'random_forest.py',
        language: 'python',
        code: `model_rf = RandomForestClassifier(
    n_estimators=1000, oob_score=True, n_jobs=-1,
    random_state=65, max_features='sqrt', max_leaf_nodes=35,
)
model_rf.fit(X_train, y_train)

prediction_test = model_rf.predict(X_test)
print(metrics.accuracy_score(y_test, prediction_test))
# accuracy: 0.797 on the held-out test set`,
      },
    ],
  },
  {
    id: 'credit-score-analysis',
    index: '03',
    title: 'Credit Score Analysis and Risk Management',
    summary:
      'Applying PCA, CCA and FCA to a behavioral credit dataset, then comparing classifiers and regressors to predict default risk and credit score.',
    description:
      "Analyzed a 1,000-customer, 84-feature Kaggle credit dataset covering income, debt, savings and spending across 11 categories (housing, gambling, health, travel, etc.). After cleaning and log-transforming heavy-tailed variables, applied Principal Component Analysis (18 components for 90% variance), Canonical Correlation Analysis (financial indicators vs. spending behavior, first canonical correlation of 0.991) and Factorial Correspondence Analysis to relate categorical features to default. For predicting DEFAULT, Logistic Regression gave the best balance of precision and recall (F1 0.468, ROC-AUC 0.626) versus Random Forest and XGBoost, which had higher accuracy but much weaker recall. For predicting the continuous CREDIT SCORE, Random Forest was the strongest regressor (R² 0.77, RMSE 28.08) ahead of Linear Regression and XGBoost.",
    contribution:
      'Team project (5 members) for the Data Analysis (Analyse de données) course at ENSIIE. I worked on the data preprocessing (cleaning, log transformation, robust scaling), the PCA/CCA/FCA analysis, and training and evaluating the classification and regression models.',
    tags: ['Python', 'Scikit-learn', 'PCA', 'XGBoost'],
    image: '/images/projects/Analysis_de_donne/credit-score-pca-scree.png',
    imageAlt: 'PCA scree plot showing cumulative explained variance for the credit score dataset',
    link: '#',
    code: [
      {
        title: 'credit_score_regressor.py',
        language: 'python',
        code: `rf_r = RandomForestRegressor(n_estimators=100, random_state=42)
rf_r.fit(X_train_r, y_train_r)

y_pred_regrf = rf_r.predict(X_test_r)
rmse_rf = np.sqrt(mean_squared_error(y_test_r, y_pred_regrf))
r2_rf = r2_score(y_test_r, y_pred_regrf)
# R2: 0.7735, RMSE: 28.08 on the held-out test set`,
      },
    ],
  },
  {
    id: 'heat-equation-solver',
    index: '04',
    title: 'Heat Equation Solver (1D & 2D)',
    summary:
      'A C++ finite-difference solver for the heat equation in 1D and 2D, with a real-time SDL2 visualization across four materials.',
    description:
      'Implemented a full numerical solver for the heat equation u_t = α·Δu + F/ρc, in both a 1D bar and a 2D plate, using an implicit finite-difference scheme with the Thomas algorithm for the tridiagonal systems, and an ADI (Alternating Direction Implicit) scheme to extend the 1D solver to 2D without the cost of a full N² linear system. Ran the simulation on four real materials (copper, iron, glass, polystyrene) with distinct thermal diffusivities, and rendered the temperature evolution live with SDL2 — copper and iron diffuse heat across nearly the whole domain, while glass and especially polystyrene stay concentrated around the heat sources, visibly showing polystyrene acting as a thermal insulator.',
    contribution:
      'Team project (2 members) for the Advanced Programming and Project course at ENSIIE. I worked on the numerical solvers (ThermalSolver1D/2D, ThomasAlgorithm, ADI scheme) and the object-oriented architecture separating materials, heat sources, solvers and visualization.',
    tags: ['C++', 'Numerical Methods', 'SDL2', 'Finite Differences'],
    image: '/images/projects/Equation_de_la_Chaleur/heat-equation-1d-profile.png',
    imageAlt: 'SDL2 window showing the simulated 1D temperature profile along a copper bar',
    link: '#',
    code: [
      {
        title: 'ThomasAlgorithm.cpp',
        language: 'cpp',
        code: `void ThomasSolver::solveTridiagonal(const double* subdiag, const double* diag,
                                     const double* superdiag, double* rhs, int n) {
    std::vector<double> modified_superdiag(n);
    std::vector<double> modified_rhs(n);

    // Forward elimination
    modified_superdiag[0] = superdiag[0] / diag[0];
    modified_rhs[0] = rhs[0] / diag[0];
    for (int i = 1; i < n; ++i) {
        double denom = diag[i] - subdiag[i-1] * modified_superdiag[i-1];
        if (i < n - 1) modified_superdiag[i] = superdiag[i] / denom;
        modified_rhs[i] = (rhs[i] - subdiag[i-1] * modified_rhs[i-1]) / denom;
    }

    // Back substitution
    rhs[n-1] = modified_rhs[n-1];
    for (int i = n-2; i >= 0; --i)
        rhs[i] = modified_rhs[i] - modified_superdiag[i] * rhs[i+1];
}`,
      },
    ],
  },
];

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
