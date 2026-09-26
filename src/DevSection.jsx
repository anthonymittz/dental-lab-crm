import Button from "@/components/elements/Button.jsx";
import AppLayout from "@/components/layouts/AppLayout.jsx";
import PaneLayout from "@/components/layouts/PaneLayout.jsx";
import TabLayout from "@/components/layouts/TabLayout.jsx";
import { is, merge } from "@lib/merge";
import { useNavigate } from "react-router";

/** DevSection
 * @param {{ 
 *   children?: import("react").ReactNode
 * }} props
 */
function DevSection({
  children = null
}) {
  return (
    <>
    <AppLayout className={{container: 'bg-accent-600'}} menu={<div>Menu</div>}>
      <TabLayout title="Dev" tabs={[{id: 'foo', label: 'Foo', to: '/dev'}]}>
        <PaneLayout template="16rem 1fr">
          <Scrollable />
        </PaneLayout>
      </TabLayout>
    </AppLayout>
    <GoBack />
    </>
  );
}

function Scrollable() {
  return (
    <div className="h-full overflow-y-scroll">
      <div>60</div><div>59</div><div>58</div><div>57</div><div>56</div><div>55</div><div>54</div><div>53</div><div>52</div><div>51</div>
      <div>50</div><div>49</div><div>48</div><div>47</div><div>46</div><div>45</div><div>44</div><div>43</div><div>42</div><div>41</div>
      <div>40</div><div>39</div><div>38</div><div>37</div><div>36</div><div>35</div><div>34</div><div>33</div><div>32</div><div>31</div>
      <div>30</div><div>29</div><div>28</div><div>27</div><div>26</div><div>25</div><div>24</div><div>23</div><div>22</div><div>21</div>
      <div>20</div><div>19</div><div>18</div><div>17</div><div>16</div><div>15</div><div>14</div><div>13</div><div>12</div><div>11</div>
    </div>
  );
}

function GoBack() {
  const navigate = useNavigate();
  return (
    <Button 
      onClick={() => navigate(-1)} 
      className={{ container: "fixed bottom-6 right-6" }}
    >
      Return to app
    </Button>
  );
}

export default DevSection;