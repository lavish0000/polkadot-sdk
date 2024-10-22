searchState.loadedDescShard("sp_weights", 0, "Primitives for transaction weighting.\nThe type that is returned as result from calculation.\nThe type that is returned as result from polynomial …\nImplementor of <code>WeightToFee</code> that uses a constant multiplier.\nA list of coefficients that represent a polynomial.\nImplementor of <code>WeightToFee</code> such that it maps any unit of …\nImplementor of <code>WeightToFee</code> that maps one unit of weight to …\nThe maximal weight in all dimensions.\nAn implementation of <code>WeightToFee</code> that collects no fee.\nThe weight of database operations that the runtime can …\nMeters consumed weight and a hard limit for the maximal …\nA trait that describes the weight to fee calculation.\nOne coefficient and its position in the <code>WeightToFee</code>.\nA list of coefficients that represent a polynomial.\nA trait that describes the weight to fee calculation as …\nConstant version of Add for <code>proof_size</code> component with u64.\nConstant version of Add for <code>ref_time</code> component with u64.\nReturns true if all of <code>self</code>’s constituent weights is …\nReturns true if all of <code>self</code>’s constituent weights is …\nReturns true if all of <code>self</code>’s constituent weights is …\nReturns true if all of <code>self</code>’s constituent weights is …\nReturns true if any of <code>self</code>’s constituent weights is …\nReturns true if any of <code>self</code>’s constituent weights is …\nReturns true if any of <code>self</code>’s constituent weights is …\nReturns true if any of <code>self</code>’s constituent weights is …\nReturns true if any of <code>self</code>’s constituent weights is …\nCheck if the given weight can be consumed.\nTry to increase <code>self</code> by <code>amount</code> via checked addition.\nChecked <code>Weight</code> addition. Computes <code>self + rhs</code>, returning …\nChecked <code>Weight</code> scalar division. Computes …\nCalculates how many <code>other</code> fit into <code>self</code>.\nChecked <code>Weight</code> scalar multiplication. Computes …\nTry to reduce <code>self</code> by <code>amount</code> via checked subtraction.\nChecked <code>Weight</code> subtraction. Computes <code>self - rhs</code>, returning …\nThe fractional part of the coefficient.\nThe integral part of the coefficient.\nConsume some weight and defensively fail if it is over the …\nThe already consumed weight.\nThe ratio of consumed weight to the limit.\nConsume some weight and defensively fail if it is over the …\nDegree/exponent of the term.\nConstant version of Div with u64.\nEvaluate the polynomial at a specific <code>x</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstruct <code>Weight</code> from the same weight for all parts.\nConstruct <code>Weight</code> from weight parts, namely reference time …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe limit can ever be accrued.\nGet the aggressive max of <code>self</code> and <code>other</code> weight.\nGet the conservative min of <code>self</code> and <code>other</code> weight.\nConstant version of Mul with u64.\nTrue iff the coefficient should be interpreted as negative.\nCreates <code>Self</code> with the maximal possible limit for the …\nReturns a polynomial that describes the weight to fee …\nReturn the storage size part of the weight.\nReturn a mutable reference to the storage size part of the …\nReclaim the given weight.\nReturn the reference time part of the weight.\nReturn a mutable reference to the reference time part of …\nThe remaining weight that can still be consumed.\nIncrement <code>Weight</code> by <code>amount</code> via saturating addition.\nSaturating <code>Weight</code> addition. Computes <code>self + rhs</code>, …\nSaturating <code>Weight</code> scalar division. Computes …\nEvaluate the term at <code>x</code> and saturatingly amalgamate into …\nSaturating <code>Weight</code> scalar multiplication. Computes …\nSaturating <code>Weight</code> scalar exponentiation. Computes …\nReduce <code>Weight</code> by <code>amount</code> via saturating subtraction.\nSaturating <code>Weight</code> subtraction. Computes <code>self - rhs</code>, …\nSet the storage size part of the weight.\nSet the reference time part of the weight.\nConstant version of Sub for <code>proof_size</code> component with u64.\nConstant version of Sub for <code>ref_time</code> component with u64.\nTry to add some <code>other</code> weight while upholding the <code>limit</code>.\nConsume the given weight after checking that it can be …\nCalculates the fee from the passed <code>weight</code>.\nCreates <code>Self</code> from a limit for the maximal consumable …\nReturn a <code>Weight</code> where all fields are zero.")